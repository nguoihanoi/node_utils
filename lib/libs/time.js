"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoEndDayTime = exports.getMongoStartDayTime = exports.getMySqlStartDayTime = exports.getTimeFromStr = exports.getMongoTime = exports.getMongoCurrentTime = exports.getSqlTime = exports.getNextTimeByTimeOfType = exports.getNextTimeByDay = exports.getFolderTime = exports.getCurrentTime = exports.getFormatFullTime = exports.getFormatTime = exports.getFormatDay = exports.getSpecialDay = exports.getTimeByDay = exports.getFullReportTime = void 0;
var _getNextTimeByTimeOfType = function (inDay, inType, inValue) {
    var nextDay = new Date(inDay);
    switch (inType) {
        case "day":
            nextDay.setDate(nextDay.getDate() + inValue);
            break;
        case "minus":
            nextDay.setMinutes(nextDay.getMinutes() + inValue);
            break;
    }
    return nextDay;
};
//
var _getNextTimeByDay = function (inDay, inValue) {
    return _getNextTimeByTimeOfType(inDay, "day", inValue);
};
var _getFullReportTime = function (inTotal) {
    if (inTotal === void 0) { inTotal = 12; }
    var d = new Date(), month = d.getMonth() + 1, year = d.getFullYear();
    var output = [];
    for (var i = 0; i < month; i = i + 1) {
        output.unshift({
            year: year,
            month: month - i,
        });
        inTotal -= 1;
    }
    year -= 1;
    for (var i = 0; i < inTotal; i = i + 1)
        output.unshift({
            year: year,
            month: 12 - i,
        });
    return output;
};
//
var getFullReportTime = function (inTotal) {
    if (inTotal === void 0) { inTotal = 12; }
    return _getFullReportTime(inTotal);
};
exports.getFullReportTime = getFullReportTime;
var getTimeByDay = function (inDay) {
    return inDay * 24 * 3600000;
};
exports.getTimeByDay = getTimeByDay;
var getSpecialDay = function (inValue, inText) {
    if (inText === void 0) { inText = "_"; }
    var d = new Date(), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;
    if (inValue == "")
        return [year, month, day].join(inText);
    return [inValue, year, month, day].join(inText);
};
exports.getSpecialDay = getSpecialDay;
var getFormatDay = function (inValue, inType, inText) {
    if (inType === void 0) { inType = 1; }
    if (inText === void 0) { inText = "/"; }
    var d = new Date(inValue), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;
    if (inType == 1)
        return [day, month, year].join(inText);
    else
        return [year, month, day].join(inText);
};
exports.getFormatDay = getFormatDay;
var getFormatTime = function (inValue, inViewType) {
    if (inViewType === void 0) { inViewType = 0; }
    var d = new Date(inValue), hour = "" + d.getHours(), minus = "" + d.getMinutes(), second = "" + d.getSeconds(), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (hour.length < 2)
        hour = "0" + hour;
    if (minus.length < 2)
        minus = "0" + minus;
    if (second.length < 2)
        second = "0" + second;
    var output = "";
    switch (inViewType) {
        case 0:
            output = [hour, minus, second].join(":");
            break;
        case 1:
            output = [day, month].join(" Th ");
            break;
    }
    return output;
};
exports.getFormatTime = getFormatTime;
var getFormatFullTime = function (inValue, inViewType) {
    if (inViewType === void 0) { inViewType = 1; }
    var d = new Date(inValue), hour = "" + d.getHours(), minus = "" + d.getMinutes(), second = "" + d.getSeconds(), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;
    if (hour.length < 2)
        hour = "0" + hour;
    if (minus.length < 2)
        minus = "0" + minus;
    if (second.length < 2)
        second = "0" + second;
    switch (inViewType) {
        case 0:
            return [hour, minus].join(":") + " - " + [day, month, year].join("/");
            break;
        case 1:
            return ([day, month, year].join("/") + " " + [hour, minus, second].join(":"));
            break;
        case 2:
            return [year, month, day].join("") + [hour, minus, second].join("");
            break;
        default:
            return ([day, month, year].join("/") + " " + [hour, minus, second].join(":"));
    }
};
exports.getFormatFullTime = getFormatFullTime;
var getCurrentTime = function (d) {
    if (d === void 0) { d = new Date(); }
    var year = d.getFullYear();
    var _month = 1 + d.getMonth();
    var _day = d.getDate();
    var month = _month.toString();
    var day = _day.toString();
    if (_month < 9)
        month = "0" + month;
    if (_day < 9)
        day = "0" + day;
    var output = year + "-" + month + "-" + day + " " + d.toTimeString().split(" ")[0];
    return output;
};
exports.getCurrentTime = getCurrentTime;
var getFolderTime = function (inCustomerId) {
    if (inCustomerId === void 0) { inCustomerId = ""; }
    var output = "";
    if (inCustomerId == "") {
        var d = new Date();
        var year = d.getFullYear();
        var _month = 1 + d.getMonth();
        var _day = d.getDate();
        var month = _month.toString();
        var day = _day.toString();
        if (_month < 9)
            month = "0" + month;
        if (_day < 9)
            day = "0" + day;
        output += year + "_" + month + "_" + day + "/";
    }
    else
        output += inCustomerId + "/";
    return output;
};
exports.getFolderTime = getFolderTime;
var getNextTimeByDay = function (inDay, inValue) {
    return _getNextTimeByDay(inDay, inValue);
};
exports.getNextTimeByDay = getNextTimeByDay;
var getNextTimeByTimeOfType = function (inDay, inType, inValue) {
    return _getNextTimeByTimeOfType(inDay, inType, inValue);
};
exports.getNextTimeByTimeOfType = getNextTimeByTimeOfType;
var getSqlTime = function (inValue) {
    var output = inValue.toISOString().split("T")[0] +
        " " +
        inValue.toTimeString().split(" ")[0];
    return output;
};
exports.getSqlTime = getSqlTime;
var getMongoCurrentTime = function () {
    return new Date().toISOString();
};
exports.getMongoCurrentTime = getMongoCurrentTime;
var getMongoTime = function (inValue) {
    return inValue.toISOString();
};
exports.getMongoTime = getMongoTime;
var getTimeFromStr = function (inValue) {
    //format 2012-03-21, 2012/03/21
    var arrValue = inValue.split("/");
    if (arrValue.length != 3)
        return false;
    return new Date(Date.parse(arrValue.join("-")));
};
exports.getTimeFromStr = getTimeFromStr;
var getMySqlStartDayTime = function (inYear, inMonth, inDay) {
    var month = inMonth.toString();
    var day = inDay.toString();
    if (inMonth < 10)
        month = "0" + month;
    if (inDay < 10)
        day = "0" + day;
    return [inYear.toString(), month, day].join("-") + " 00:00:00";
};
exports.getMySqlStartDayTime = getMySqlStartDayTime;
var getMongoStartDayTime = function (inYear, inMonth, inDay) {
    var month = inMonth.toString();
    var day = inDay.toString();
    if (inMonth < 10)
        month = "0" + month;
    if (inDay < 10)
        day = "0" + day;
    return new Date([inYear.toString(), month, day].join("-") + " 00:00:00").toISOString();
};
exports.getMongoStartDayTime = getMongoStartDayTime;
var getMongoEndDayTime = function (inYear, inMonth, inDay) {
    var month = inMonth.toString();
    var day = inDay.toString();
    if (inMonth < 10)
        month = "0" + month;
    if (inDay < 10)
        day = "0" + day;
    return new Date([inYear.toString(), month, day].join("-") + " 23:59:59").toISOString();
};
exports.getMongoEndDayTime = getMongoEndDayTime;
