export declare const responseError: (inCode: number, inLang?: string) => {
    status: boolean;
    statusCode: number;
    message: string;
};
export declare const responseErrorProcess: (inLang?: string) => {
    status: boolean;
    message: string;
    statusCode: number;
    data: null;
};
export declare const responseInvalidInput: (inLang?: string) => {
    status: boolean;
    message: string;
    statusCode: number;
    data: null;
};
export declare const responseErrorMsg: (inCode: string, inLang?: string, statusCode?: number) => {
    status: boolean;
    message: string;
    statusCode: number;
    data: null;
};
export declare const responseNoResult: (inData?: boolean, inLang?: string) => {
    status: boolean;
    message: string;
    statusCode: number;
    data: null;
};
export declare const responseSuccess: (inCode: string, inLang?: string, inData?: boolean) => {
    status: boolean;
    message: string;
    data: null;
};
