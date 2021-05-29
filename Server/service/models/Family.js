var db = require('../schema');
var Sequelize = require('sequelize');

class Family {
    getFamilyList() {
        return new Promise((resolve, reject) => {
            db.family.findAll({
                attributes: [
                    'id', 'familyName',
                    [Sequelize.fn("COUNT", Sequelize.col("familyMembers.familyId")), "totalMembers"]
                ],
                group: ['familyMembers.familyId'],
                include: [{
                    model: db.familyMember, as: 'familyMembers',
                    attributes: [],
                }]
            }).then(familyRes => {
                resolve({ data: familyRes, status: true });
            }).catch(error => {
                resolve({ error: error, status: false });
            })
        })
    }
    createFamily(requestData){
        return new Promise((resolve, reject) =>{
            db.family.create({ familyName: requestData[0].familyName }).then(resFamily => {
                var familyMember = requestData.map(member => ({ ...member, familyId: resFamily.toJSON().id }));
                db.familyMember.bulkCreate(familyMember, { returning: true }).then(memberResponse => {
                    resolve({ data: [], status: true });
                }).catch(error => {
                    resolve({ error: error, status: false });
                });
            }).catch(error => {
                resolve({ error: error, status: false });
            })
        })
        
    }
    deleteFamily (familyGuid){
        return new Promise((resolve, reject) =>{
            db.family.destroy({where : {id: familyGuid}}).then(familyRes=>{
                resolve({ data: [], status: true });
            })
        })
    }
};
module.exports = Family;