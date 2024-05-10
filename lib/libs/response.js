"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseSuccess = exports.responseNoResult = exports.responseErrorMsg = exports.responseInvalidInput = exports.responseErrorProcess = exports.responseError = void 0;
var i18n = require("./language");
var _return200 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: true,
        statusCode: 200,
        message: i18n.oneText("Success!", inLang),
    };
};
var _return401 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: false,
        statusCode: 401,
        message: i18n.oneText("Not authorized to access this resource!", inLang),
    };
};
var _return402 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: false,
        statusCode: 402,
        message: i18n.oneText("Token has expired!", inLang),
    };
};
var _return403 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: false,
        statusCode: 403,
        message: i18n.oneText("The system is maintenance!", inLang),
    };
};
var _return405 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: false,
        statusCode: 405,
        message: i18n.oneText("Your account is logged in on another device!", inLang),
    };
};
var _return408 = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return {
        status: false,
        statusCode: 408,
        message: i18n.oneText("There are too many connections to the system!", inLang),
    };
};
var _responseErrorMsg = function (inCode, inLang, inData, statusCode) {
    if (inLang === void 0) { inLang = "vi"; }
    if (inData === void 0) { inData = false; }
    if (statusCode === void 0) { statusCode = 406; }
    var output = {
        status: false,
        message: i18n.oneText(inCode, inLang),
        statusCode: statusCode,
        data: null,
    };
    if (inData != false)
        output['data'] = inData;
    return output;
};
var _responseDataMsg = function (inCode, inLang, inData) {
    if (inLang === void 0) { inLang = "vi"; }
    if (inData === void 0) { inData = false; }
    var output = {
        status: true,
        message: i18n.oneText(inCode, inLang),
        data: null,
    };
    if (inData != false)
        output.data = inData;
    return output;
};
var responseError = function (inCode, inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    switch (inCode) {
        case 401:
            return _return401(inLang);
        case 402:
            return _return402(inLang);
        case 403:
            return _return403(inLang);
        case 405:
            return _return405(inLang);
        case 408:
            return _return408(inLang);
        default:
            return _responseErrorMsg("An error occurred during processing.", inLang);
    }
};
exports.responseError = responseError;
var responseErrorProcess = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return _responseErrorMsg("An error occurred during processing.", inLang);
};
exports.responseErrorProcess = responseErrorProcess;
var responseInvalidInput = function (inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    return _responseErrorMsg("Invalid input data!", inLang);
};
exports.responseInvalidInput = responseInvalidInput;
var responseErrorMsg = function (inCode, inLang, statusCode) {
    if (inLang === void 0) { inLang = "vi"; }
    if (statusCode === void 0) { statusCode = 406; }
    return _responseErrorMsg(inCode, inLang, false, statusCode);
};
exports.responseErrorMsg = responseErrorMsg;
var responseNoResult = function (inData, inLang) {
    if (inData === void 0) { inData = false; }
    if (inLang === void 0) { inLang = "vi"; }
    return _responseErrorMsg("No results found on the system!", inLang, inData);
};
exports.responseNoResult = responseNoResult;
var responseSuccess = function (inCode, inLang, inData) {
    if (inLang === void 0) { inLang = "vi"; }
    if (inData === void 0) { inData = false; }
    return _responseDataMsg(inCode, inLang, inData);
};
exports.responseSuccess = responseSuccess;
