"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInputApi = exports.validateNumber = exports.isOnlyNumbers = exports.validateEmail = void 0;
var _validateInputApi = function (inObj, inArrKey) {
    var output = true;
    for (var i = 0; i < inArrKey.length; i = i + 1) {
        if (typeof inObj[inArrKey[i]] == "undefined" ||
            inObj[inArrKey[i]] == null) {
            output = false;
            break;
        }
    }
    return output;
};
var _isOnlyNumbers = function (str) {
    if (str === "")
        return false;
    if (str < 0)
        return true;
    return /^[0-9]+$/.test(str);
};
var _validateNumber = function (inArr) {
    for (var i = 0; i < inArr.length; i++) {
        if (_isOnlyNumbers(inArr[i]) == false)
            return false;
    }
    return true;
};
var _validateEmail = function (inMail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inMail)) {
        return true;
    }
    return false;
};
var validateEmail = function (inValue) {
    return _validateEmail(inValue);
};
exports.validateEmail = validateEmail;
var isOnlyNumbers = function (str) {
    return _isOnlyNumbers(str);
};
exports.isOnlyNumbers = isOnlyNumbers;
var validateNumber = function (inArr) {
    return _validateNumber(inArr);
};
exports.validateNumber = validateNumber;
var validateInputApi = function (inObj, inArrKey) {
    return _validateInputApi(inObj, inArrKey);
};
exports.validateInputApi = validateInputApi;
