const _validateInputApi = (inObj: any, inArrKey: string[]) => {
    let output = true;
    for (let i = 0; i < inArrKey.length; i = i + 1) {
        if (
            typeof inObj[inArrKey[i]] == "undefined" ||
            inObj[inArrKey[i]] == null
        ) {
            output = false;
            break;
        }
    }
    return output;
}

const _isOnlyNumbers = (str: any) => {
    if (str === "") return false;
    if (str < 0) return true;
    return /^[0-9]+$/.test(str);
};

const _validateNumber = (inArr: any[]) => {
    for (let i = 0; i < inArr.length; i++) {
        if (_isOnlyNumbers(inArr[i]) == false)
            return false;
    }
    return true;
}
const _validateEmail = (inMail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inMail)) {
        return true;
    }
    return false;
};
export const validateEmail = (inValue: string) => {
    return _validateEmail(inValue);
}
export const isOnlyNumbers = (str: any) => {
    return _isOnlyNumbers(str);
}

export const validateNumber = (inArr: any[]) => {
    return _validateNumber(inArr);
};

export const validateInputApi = (inObj: object, inArrKey: string[]) => {
    return _validateInputApi(inObj, inArrKey);
};