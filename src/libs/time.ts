const _getNextTimeByTimeOfType = (inDay: any, inType: string, inValue: number) => {
    let nextDay = new Date(inDay);
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
const _getNextTimeByDay = (inDay: number, inValue: number) => {
    return _getNextTimeByTimeOfType(inDay, "day", inValue);
};
const _getFullReportTime = (inTotal = 12) => {
    var d = new Date(),
        month = d.getMonth() + 1,
        year = d.getFullYear();
    let output = [];
    for (let i = 0; i < month; i = i + 1) {
        output.unshift({
            year: year,
            month: month - i,
        });
        inTotal -= 1;
    }
    year -= 1;
    for (let i = 0; i < inTotal; i = i + 1)
        output.unshift({
            year: year,
            month: 12 - i,
        });
    return output;
};
//
export const getFullReportTime = (inTotal: number = 12) => {
    return _getFullReportTime(inTotal);
};
export const getTimeByDay = (inDay: number) => {
    return inDay * 24 * 3600000;
};
export const getSpecialDay = (inValue: string, inText: string = "_") => {
    var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (inValue == "") return [year, month, day].join(inText);
    return [inValue, year, month, day].join(inText);
};
export const getFormatDay = (inValue: any, inType: number = 1, inText: string = "/") => {
    var d = new Date(inValue),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (inType == 1) return [day, month, year].join(inText);
    else return [year, month, day].join(inText);
};
export const getFormatTime = (inValue: any, inViewType: number = 0) => {
    var d = new Date(inValue),
        hour = "" + d.getHours(),
        minus = "" + d.getMinutes(),
        second = "" + d.getSeconds(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (hour.length < 2) hour = "0" + hour;
    if (minus.length < 2) minus = "0" + minus;
    if (second.length < 2) second = "0" + second;
    let output = "";
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
export const getFormatFullTime = (inValue: any, inViewType: number = 1) => {
    var d = new Date(inValue),
        hour = "" + d.getHours(),
        minus = "" + d.getMinutes(),
        second = "" + d.getSeconds(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hour.length < 2) hour = "0" + hour;
    if (minus.length < 2) minus = "0" + minus;
    if (second.length < 2) second = "0" + second;
    switch (inViewType) {
        case 0:
            return [hour, minus].join(":") + " - " + [day, month, year].join("/");
            break;
        case 1:
            return (
                [day, month, year].join("/") + " " + [hour, minus, second].join(":")
            );
            break;
        case 2:
            return [year, month, day].join("") + [hour, minus, second].join("");
            break;
        default:
            return (
                [day, month, year].join("/") + " " + [hour, minus, second].join(":")
            );
    }
};
export const getCurrentTime = (d: Date = new Date()) => {
    let year = d.getFullYear();
    let _month = 1 + d.getMonth();
    let _day = d.getDate();
    let month = _month.toString();
    let day = _day.toString();
    if (_month < 9) month = "0" + month;
    if (_day < 9) day = "0" + day;
    const output =
        year + "-" + month + "-" + day + " " + d.toTimeString().split(" ")[0];
    return output;
};
export const getFolderTime = (inCustomerId: string = "") => {
    let output = "";
    if (inCustomerId == "") {
        let d = new Date();
        let year = d.getFullYear();
        let _month = 1 + d.getMonth();
        let _day = d.getDate();
        let month = _month.toString();
        let day = _day.toString();
        if (_month < 9) month = "0" + month;
        if (_day < 9) day = "0" + day;
        output += year + "_" + month + "_" + day + "/";
    } else
        output += inCustomerId + "/";
    return output;
};
export const getNextTimeByDay = (inDay: number, inValue: number) => {
    return _getNextTimeByDay(inDay, inValue);
};
export const getNextTimeByTimeOfType = (inDay: any, inType: string, inValue: number) => {
    return _getNextTimeByTimeOfType(inDay, inType, inValue);
};
export const getSqlTime = (inValue: Date) => {
    const output =
        inValue.toISOString().split("T")[0] +
        " " +
        inValue.toTimeString().split(" ")[0];
    return output;
};
export const getMongoCurrentTime = () => {
    return new Date().toISOString();
};
export const getMongoTime = (inValue: Date) => {
    return inValue.toISOString();
};
export const getTimeFromStr = (inValue: string) => {
    //format 2012-03-21, 2012/03/21
    const arrValue = inValue.split("/");
    if (arrValue.length != 3) return false;
    return new Date(Date.parse(arrValue.join("-")));
};
export const getMySqlStartDayTime = (inYear: number, inMonth: number, inDay: number) => {
    let month = inMonth.toString();
    let day = inDay.toString();
    if (inMonth < 10) month = "0" + month;
    if (inDay < 10) day = "0" + day;
    return [inYear.toString(), month, day].join("-") + " 00:00:00";
};
export const getMongoStartDayTime = (inYear: number, inMonth: number, inDay: number) => {
    let month = inMonth.toString();
    let day = inDay.toString();
    if (inMonth < 10) month = "0" + month;
    if (inDay < 10) day = "0" + day;
    return new Date(
        [inYear.toString(), month, day].join("-") + " 00:00:00"
    ).toISOString();
};
export const getMongoEndDayTime = (inYear: number, inMonth: number, inDay: number) => {
    let month = inMonth.toString();
    let day = inDay.toString();
    if (inMonth < 10) month = "0" + month;
    if (inDay < 10) day = "0" + day;
    return new Date(
        [inYear.toString(), month, day].join("-") + " 23:59:59"
    ).toISOString();
};
