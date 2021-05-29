'use strict';
var FamilyModel = require('../../../models/Family');
var familyModel = new FamilyModel();
var familyMessage = require('../../../common/statusCodeMessages').FAMILY;
var commonMethods = require('../../../common/commonMethods');

exports.getFamilyList = function (req, res) {
    familyModel.getFamilyList().then(familyRes => {
        if (familyRes.status) {
            commonMethods.setSuccess(familyRes.data, familyMessage.LIST, function (response) {
                return res.status(response.status).json(response)
            })
        } else {
            commonMethods.setFatalError(familyRes.error, function (response) {
                return res.status(response.status).json(response)
            });
        }
    })

};
exports.addFamily = function (req, res) {
    var requestData = req.body;
    req.checkBody('[0].familyName', 'Family Name is required').trim().notEmpty();
    req.checkBody('*.personName', 'Person Name is required').trim().notEmpty();
    req.checkBody('*.gender', 'Gender is required').trim().notEmpty();
    req.checkBody('*.gender', 'Gender should be 1 or 2').isIn(['1', '2']);
    req.checkBody('*.parentId', 'Parent Id is required').trim().notEmpty();

    var mappedErrors = req.validationErrors(req);
    if (mappedErrors === false) {
        familyModel.createFamily(requestData).then(familyRes => {
            if (familyRes.status) {
                commonMethods.setSuccess(familyRes.data, familyMessage.CREATE, function (response) {
                    return res.status(response.status).json(response)
                })
            } else {
                commonMethods.setFatalError(familyRes.error, function (response) {
                    return res.status(response.status).json(response)
                });
            }
        })
    } else {
        commonMethods.setValidationError(mappedErrors, function (response) {
            res.status(response.status).json(response);
        });
    }


};
exports.deleteFamily = function (req, res) {
    req.checkParams('familyId', 'Family id is required').trim().notEmpty();
    var mappedErrors = req.validationErrors(req);
    if (mappedErrors === false) {
        familyModel.deleteFamily(req.params.familyId).then(familyRes => {
            if (familyRes.status) {
                commonMethods.setSuccess(familyRes.data, familyMessage.DELETE, function (response) {
                    return res.status(response.status).json(response)
                })
            } else {
                commonMethods.setFatalError(familyRes.error, function (response) {
                    return res.status(response.status).json(response)
                });
            }
        })
    } else {
        commonMethods.setValidationError(mappedErrors, function (response) {
            res.status(response.status).json(response);
        });
    }

};