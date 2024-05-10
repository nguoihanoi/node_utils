import * as i18n from './language';
const _return200 = (inLang: string = "vi") => {
    return {
        status: true,
        statusCode: 200,
        message: i18n.oneText("Success!", inLang),
    };
};
const _return401 = (inLang: string = "vi") => {
    return {
        status: false,
        statusCode: 401,
        message: i18n.oneText("Not authorized to access this resource!", inLang),
    };
};
const _return402 = (inLang: string = "vi") => {
    return {
        status: false,
        statusCode: 402,
        message: i18n.oneText("Token has expired!", inLang),
    };
};
const _return403 = (inLang: string = "vi") => {
    return {
        status: false,
        statusCode: 403,
        message: i18n.oneText("The system is maintenance!", inLang),
    };
};
const _return405 = (inLang: string = "vi") => {
    return {
        status: false,
        statusCode: 405,
        message: i18n.oneText(
            "Your account is logged in on another device!",
            inLang
        ),
    };
};
const _return408 = (inLang: string = "vi") => {
    return {
        status: false,
        statusCode: 408,
        message: i18n.oneText(
            "There are too many connections to the system!",
            inLang
        ),
    };
};
const _responseErrorMsg = (
    inCode: string,
    inLang: string = "vi",
    inData: any = false,
    statusCode: number = 406
) => {
    let output = {
        status: false,
        message: i18n.oneText(inCode, inLang),
        statusCode: statusCode,
        data: null,
    };
    if (inData != false) output['data'] = inData;
    return output;
};
const _responseDataMsg = (inCode: string, inLang: string = "vi", inData: any = false) => {
    let output = {
        status: true,
        message: i18n.oneText(inCode, inLang),
        data: null,
    };
    if (inData != false) output.data = inData;
    return output;
};
export const responseError = (inCode: number, inLang: string = "vi") => {
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

export const responseErrorProcess = (inLang: string = "vi") => {
    return _responseErrorMsg("An error occurred during processing.", inLang);
};
export const responseInvalidInput = (inLang: string = "vi") => {
    return _responseErrorMsg("Invalid input data!", inLang);
};
export const responseErrorMsg = (inCode: string, inLang = "vi", statusCode = 406) => {
    return _responseErrorMsg(inCode, inLang, false, statusCode);
};
export const responseNoResult = (inData = false, inLang = "vi") => {
    return _responseErrorMsg("No results found on the system!", inLang, inData);
};
export const responseSuccess = (inCode: string, inLang = "vi", inData = false) => {
    return _responseDataMsg(inCode, inLang, inData);
};