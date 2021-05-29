'use strict';
var familyController = require('../controller/familyController');

module.exports = function (app) {
    app.get('/api/family', familyController.getFamilyList);
    
    app.post('/api/family', familyController.addFamily);
    
    app.delete('/api/family/:familyId', familyController.deleteFamily);

};