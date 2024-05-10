import { printf } from 'fast-printf';
import * as path from "path";
import * as i18next from 'i18next';
import backendI18 from "i18next-fs-backend";
let initStatus = false;

const initData = () => {
    if (initStatus == false)
        try {
            const pathText = path.join(path.resolve(path.resolve(path.resolve(path.resolve(__dirname, ".."), ".."), ".."), ".."), "locales") + '/{{lng}}.json';
            i18next.use(backendI18).init({
                initImmediate: false,
                backend: {
                    loadPath: pathText,
                },
                fallbackLng: 'vi',
                preload: ['en', 'vi']
            });
            initStatus = true;
        } catch (error) {
            console.error(error);
        }
}

export const oneText = (inText: string, inLang: string = "vi") => {
    initData();
    return i18next.t(inText, { lng: inLang });
};
export const replaceText = (inText: string, ...inValue: string[]) => {
    return printf(inText, ...inValue);
}; 
