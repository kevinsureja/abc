var statusCode = require('./statusCodeMessages');
var  setSuccess = function(data, message, callback){
    return callback({
        status: statusCode.SUCCESS.CODE,
        data: data,
        message: message
    });
}
var setFatalError = function(error, callback){
    return callback({
        status: statusCode.INTERNALERROR.CODE,
        error: error.message
    });
}
var setValidationError = function (errors, callback) {
    var err = [];
    Object.keys(errors).map(function (obj) {
        var errObj = errors[obj];
        delete errObj.location;
        delete errObj.value;
        if (typeof errObj.msg != 'undefined') {
            errObj.message = errObj.msg;
            delete errObj.msg;
        }
        err.push(errObj);
    });
    return callback({
        status: 409,
        message: '',
        error: err,
    });
};

module.exports = {
    setSuccess : setSuccess,
    setFatalError : setFatalError,
    setValidationError : setValidationError
}