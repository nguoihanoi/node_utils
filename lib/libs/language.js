"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceText = exports.oneText = void 0;
var fast_printf_1 = require("fast-printf");
var path = require("path");
var i18next = require("i18next");
var i18next_fs_backend_1 = require("i18next-fs-backend");
var initStatus = false;
var initData = function () {
    if (initStatus == false)
        try {
            var pathText = path.join(path.resolve(path.resolve(__dirname, ".."), ".."), "locales") + '/{{lng}}.json';
            console.log(pathText);
            i18next.use(i18next_fs_backend_1.default).init({
                initImmediate: false,
                backend: {
                    loadPath: pathText,
                },
                fallbackLng: 'vi',
                preload: ['en', 'vi']
            });
            initStatus = true;
        }
        catch (error) {
            console.error(error);
        }
};
var oneText = function (inText, inLang) {
    if (inLang === void 0) { inLang = "vi"; }
    initData();
    return i18next.t(inText, { lng: inLang });
};
exports.oneText = oneText;
var replaceText = function (inText) {
    var inValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inValue[_i - 1] = arguments[_i];
    }
    return fast_printf_1.printf.apply(void 0, __spreadArray([inText], inValue, false));
};
exports.replaceText = replaceText;
