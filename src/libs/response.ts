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
export const responseError = (ctx: any, inCode: number, inLang: string = "vi") => {
    let output;
    switch (inCode) {
        case 401:
            output = _return401(inLang);
        case 402:
            output = _return402(inLang);
        case 403:
            output = _return403(inLang);
        case 405:
            output = _return405(inLang);
        case 408:
            output = _return408(inLang);
        default:
            output = _responseErrorMsg("An error occurred during processing.", inLang);
    }
    ctx.body = {
        status: output.status,
        message: output.message,
    };
    ctx.response.status = output.statusCode;
};

export const responseErrorProcess = (ctx: any, inLang: string = "vi") => {
    let output = _responseErrorMsg("An error occurred during processing.", inLang);
    ctx.body = {
        status: output.status,
        message: output.message,
    };
    ctx.response.status = output.statusCode;
};
export const responseInvalidInput = (ctx: any, inLang: string = "vi") => {
    let output = _responseErrorMsg("Invalid input data!", inLang);
    ctx.body = {
        status: output.status,
        message: output.message,
    };
    ctx.response.status = output.statusCode;
};
export const responseErrorMsg = (ctx: any, inCode: string, inLang = "vi", statusCode = 406) => {
    let output = _responseErrorMsg(inCode, inLang);
    ctx.body = {
        status: output.status,
        message: output.message,
    };
    ctx.response.status = statusCode;
};
export const responseNoResult = (ctx: any, inData = false, inLang = "vi") => {
    let output = _responseErrorMsg("No results found on the system!", inLang, inData);
    ctx.body = {
        status: output.status,
        message: output.message,
        data: output.data,
    };
    ctx.response.status = output.statusCode;
};
export const responseSuccess = (ctx: any, inCode: string, inLang = "vi", inData: any = false) => {
    let output = _responseDataMsg(inCode, inLang, inData);
    ctx.body = {
        status: output.status,
        message: output.message,
        data: output.data,
    };
};
