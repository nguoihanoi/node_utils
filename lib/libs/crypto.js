"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthRefreshToken = exports.generateAuthToken = exports.randomNumber = exports.randomPassword = exports.decryptAES = exports.encryptAES = exports.getUuid = exports.getDataByTokenAndKey = exports.cryptoSHA3WithKey = exports.cryptoSHA3 = exports.getQueryStr = exports.cryptoMd5 = exports.getDefaultToken = exports.getPhoneEncrypt = void 0;
var jwt = require("jsonwebtoken");
var querystring = require("qs");
var generator = require("generate-password");
var sha3_1 = require("sha3");
var crypto = require("crypto");
var objData = {
    enc_key: "bf3c199c2470cb477d907b1e0917c17b",
    iv: "5183666c72eec9e4",
    status_product: "beta",
    jwtKey: "ThanhNv",
    jwtKeyTime: 1440,
    jwtReKey: "ThanhNv",
    jwtReKeyTime: 14400,
};
var _getDataByTokenAndKey = function (inToken, inKey) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                    jwt.verify(inToken, inKey, function (err, decode) {
                        if (err) {
                            resolve(false);
                        }
                        resolve(decode);
                    });
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var _generateAuthToken = function (inpVal) {
    // Generate an auth token for the user
    var token = "";
    if (objData.status_product == "live") {
        token = jwt.sign({ _id: inpVal }, objData.jwtKey);
    }
    else {
        token = jwt.sign({ _id: inpVal }, objData.jwtKey, {
            expiresIn: 60 * objData.jwtKeyTime,
        });
    }
    var output = String(token);
    return output;
};
_generateAuthToken("media_1_656fdf17d034e1ffff2b3b31_vi");
var _cryptoSHA3 = function (inpVal) { return __awaiter(void 0, void 0, void 0, function () {
    var hash, encrypted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hash = new sha3_1.SHA3(512);
                return [4 /*yield*/, hash.update(inpVal)];
            case 1:
                _a.sent();
                return [4 /*yield*/, hash.digest("hex")];
            case 2:
                encrypted = _a.sent();
                return [2 /*return*/, encrypted];
        }
    });
}); };
var _getQueryStr = function (inpVal, inEncode) {
    if (inEncode === void 0) { inEncode = true; }
    return querystring.stringify(inpVal, { encode: inEncode });
};
var _cryptoSHA3WithKey = function (inpVal, secretKey) {
    var signData = _getQueryStr(inpVal);
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(signData).digest("hex");
    return signed;
};
var _cryptoMd5 = function (inValue) {
    return crypto.createHash("md5").update(inValue).digest("hex");
};
var _getDefaultToken = function () {
    return _cryptoMd5("pocy@" + new Date().toISOString().split("T")[0]);
};
console.log(_getDefaultToken());
var _encryptAES = function (inpVal) {
    var cipher = crypto.createCipheriv("aes-256-cbc", objData.enc_key, objData.iv);
    var encrypted = cipher.update(inpVal, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
};
var _decryptAES = function (inpVal) {
    var decipher = crypto.createDecipheriv("aes-256-cbc", objData.enc_key, objData.iv);
    var decrypted = decipher.update(inpVal, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
};
var _getPhoneEncrypt = function (inpVal) {
    var arrVal = inpVal.split("");
    if (inpVal.length > 4) {
        var eIndex = arrVal.length - 4;
        for (var i = 0; i < eIndex; i = i + 1) {
            arrVal[i] = "x";
        }
    }
    else {
        var iNumber = arrVal.length / 2;
        var eIndex = parseInt(iNumber.toString());
        for (var i = 0; i < eIndex; i = i + 1) {
            arrVal[i] = "x";
        }
    }
    var output = arrVal.join("");
    return output;
};
var getPhoneEncrypt = function (inpVal) {
    return _getPhoneEncrypt(inpVal);
};
exports.getPhoneEncrypt = getPhoneEncrypt;
var getDefaultToken = function () {
    return _getDefaultToken();
};
exports.getDefaultToken = getDefaultToken;
var cryptoMd5 = function (inpVal) {
    return _cryptoMd5(inpVal);
};
exports.cryptoMd5 = cryptoMd5;
var getQueryStr = function (inpVal, inEncode) {
    if (inEncode === void 0) { inEncode = false; }
    return _getQueryStr(inpVal, inEncode);
};
exports.getQueryStr = getQueryStr;
var cryptoSHA3 = function (inpVal) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _cryptoSHA3(inpVal)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.cryptoSHA3 = cryptoSHA3;
var cryptoSHA3WithKey = function (signData, secretKey) {
    return _cryptoSHA3WithKey(signData, secretKey);
};
exports.cryptoSHA3WithKey = cryptoSHA3WithKey;
var getDataByTokenAndKey = function (inToken, inKey) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _getDataByTokenAndKey(inToken, inKey)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getDataByTokenAndKey = getDataByTokenAndKey;
var getUuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.getUuid = getUuid;
var encryptAES = function (inpVal) {
    return _encryptAES(inpVal);
};
exports.encryptAES = encryptAES;
var decryptAES = function (inpVal) {
    return _decryptAES(inpVal);
};
exports.decryptAES = decryptAES;
var randomPassword = function (inpVal) {
    var password = generator.generate({
        length: inpVal,
        numbers: true,
    });
    var output = String(password);
    return output;
};
exports.randomPassword = randomPassword;
var randomNumber = function (inpVal) {
    var characters = "0123456789";
    var output = Array.from(crypto.randomFillSync(new Uint32Array(inpVal)))
        .map(function (x) { return characters[x % characters.length]; })
        .join("");
    return output;
};
exports.randomNumber = randomNumber;
var generateAuthToken = function (inpVal) {
    return _generateAuthToken(inpVal);
};
exports.generateAuthToken = generateAuthToken;
var generateAuthRefreshToken = function (inpVal) {
    // Generate an auth token for the user
    var token = "";
    if (objData.status_product != "live") {
        token = jwt.sign({ _id: inpVal }, objData.jwtReKey);
    }
    else {
        token = jwt.sign({ _id: inpVal }, objData.jwtReKey, {
            expiresIn: 60 * objData.jwtReKeyTime,
        });
    }
    return String(token);
};
exports.generateAuthRefreshToken = generateAuthRefreshToken;
