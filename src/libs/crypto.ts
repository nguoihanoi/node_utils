import * as jwt from 'jsonwebtoken';
import * as querystring from 'qs';
import * as generator from 'generate-password';
import { SHA3 } from 'sha3';
import * as crypto from 'crypto';

let objData = {
    enc_key: "bf3c199c2470cb477d907b1e0917c17b",
    iv: "5183666c72eec9e4",
    status_product: "beta",
    jwtKey: "ThanhNv",
    jwtKeyTime: 1440,
    jwtReKey: "ThanhNv",
    jwtReKeyTime: 14400,
}

const _getDataByTokenAndKey = async (inToken: string, inKey: string) => {
    return await new Promise(function (resolve, reject) {
        jwt.verify(inToken, inKey, function (err: any, decode: any) {
            if (err) {
                resolve(false);
            }
            resolve(decode);
        });
    });
};

const _generateAuthToken = (inpVal: any) => {
    // Generate an auth token for the user
    let token = "";
    if (objData.status_product == "live") {
        token = jwt.sign({ _id: inpVal }, objData.jwtKey);
    } else {
        token = jwt.sign({ _id: inpVal }, objData.jwtKey, {
            expiresIn: 60 * objData.jwtKeyTime,
        });
    }
    const output = String(token);
    return output;
};
_generateAuthToken("media_1_656fdf17d034e1ffff2b3b31_vi");

const _cryptoSHA3 = async (inpVal: string) => {
    const hash = new SHA3(512);
    await hash.update(inpVal);
    let encrypted = await hash.digest("hex");
    return encrypted;
};

const _getQueryStr = (inpVal: any, inEncode = true) => {
    return querystring.stringify(inpVal, { encode: inEncode });
};

const _cryptoSHA3WithKey = (inpVal: string, secretKey: string) => {
    var signData = _getQueryStr(inpVal);
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(signData).digest("hex");
    return signed;
};

const _cryptoMd5 = (inValue: string) => {
    return crypto.createHash("md5").update(inValue).digest("hex");
};

const _getDefaultToken = () => {
    return _cryptoMd5("pocy@" + new Date().toISOString().split("T")[0]);
};
console.log(_getDefaultToken());

const _encryptAES = (inpVal: string) => {
    let cipher = crypto.createCipheriv("aes-256-cbc", objData.enc_key, objData.iv);
    let encrypted = cipher.update(inpVal, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
};

const _decryptAES = (inpVal: string) => {
    let decipher = crypto.createDecipheriv("aes-256-cbc", objData.enc_key, objData.iv);
    let decrypted = decipher.update(inpVal, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
};

const _getPhoneEncrypt = (inpVal: string) => {
    let arrVal = inpVal.split("");
    if (inpVal.length > 4) {
        const eIndex = arrVal.length - 4;
        for (let i = 0; i < eIndex; i = i + 1) {
            arrVal[i] = "x";
        }
    } else {
        let iNumber = arrVal.length / 2;
        const eIndex = parseInt(iNumber.toString());
        for (let i = 0; i < eIndex; i = i + 1) {
            arrVal[i] = "x";
        }
    }
    const output = arrVal.join("");
    return output;
};

export const getPhoneEncrypt = (inpVal: string) => {
    return _getPhoneEncrypt(inpVal);
};

export const getDefaultToken = () => {
    return _getDefaultToken();
};

export const cryptoMd5 = (inpVal: string) => {
    return _cryptoMd5(inpVal);
};

export const getQueryStr = (inpVal: any, inEncode = false) => {
    return _getQueryStr(inpVal, inEncode);
};

export const cryptoSHA3 = async (inpVal: string) => {
    return await _cryptoSHA3(inpVal);
};

export const cryptoSHA3WithKey = (signData: string, secretKey: string) => {
    return _cryptoSHA3WithKey(signData, secretKey);
}

export const getDataByTokenAndKey = async (inToken: string, inKey: string) => {
    return await _getDataByTokenAndKey(inToken, inKey);
}
export const getUuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};
export const encryptAES = (inpVal: string) => {
    return _encryptAES(inpVal);
};

export const decryptAES = (inpVal: string) => {
    return _decryptAES(inpVal);
};

export const randomPassword = (inpVal: number) => {
    var password = generator.generate({
        length: inpVal,
        numbers: true,
    });
    const output = String(password);
    return output;
};

export const randomNumber = (inpVal: number) => {
    const characters = "0123456789";
    const output = Array.from(crypto.randomFillSync(new Uint32Array(inpVal)))
        .map((x) => characters[x % characters.length])
        .join("");
    return output;
}

export const generateAuthToken = (inpVal: any) => {
    return _generateAuthToken(inpVal);
}

export const generateAuthRefreshToken = (inpVal: string) => {
    // Generate an auth token for the user
    let token = "";
    if (objData.status_product != "live") {
        token = jwt.sign({ _id: inpVal }, objData.jwtReKey);
    } else {
        token = jwt.sign({ _id: inpVal }, objData.jwtReKey, {
            expiresIn: 60 * objData.jwtReKeyTime,
        });
    }
    return String(token);
}
