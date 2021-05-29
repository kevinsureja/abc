module.exports = function (app) {
    var familyRoute = require('./api/family/route/familyRoute.js');
    new familyRoute(app);
}