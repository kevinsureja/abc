var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.family = require("./family.model.js")(sequelize, Sequelize);
db.familyMember = require("./familyMember.model.js")(sequelize, Sequelize);

db.family.hasMany(db.familyMember, { as: "familyMembers"});
db.familyMember.belongsTo(db.family, {
  foreignKey: "familyId",
  as: "family",
  onDelete: 'cascade',
  hooks:true
});
module.exports = db;


