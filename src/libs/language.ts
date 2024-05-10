import { printf } from 'fast-printf';
import * as path from "path";
import i18next from 'i18next';
import backendI18 from "i18next-fs-backend";

try {
    i18next.use(backendI18).init({
        initImmediate: false,
        backend: {
            loadPath: path.join(path.resolve(path.resolve(__dirname, ".."), ".."), "locales") + '/{{lng}}.json',
        },
        fallbackLng: 'vi',
        preload: ['en', 'vi']
    });
} catch (error) {
    console.error(error);
}

export const oneText = (inText: string, inLang: string = "vi") => {
    return i18next.t(inText, { lng: inLang });
};
export const replaceText = (inText: string, ...inValue: string[]) => {
    return printf(inText, ...inValue);
}; 
