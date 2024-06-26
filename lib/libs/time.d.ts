export declare const getFullReportTime: (inTotal?: number) => {
    year: number;
    month: number;
}[];
export declare const getTimeByDay: (inDay: number) => number;
export declare const getSpecialDay: (inValue: string, inText?: string) => string;
export declare const getFormatDay: (inValue: any, inType?: number, inText?: string) => string;
export declare const getFormatTime: (inValue: any, inViewType?: number) => string;
export declare const getFormatFullTime: (inValue: any, inViewType?: number) => string;
export declare const getCurrentTime: (d?: Date) => string;
export declare const getFolderTime: (inCustomerId?: string) => string;
export declare const getNextTimeByDay: (inDay: number, inValue: number) => Date;
export declare const getNextTimeByTimeOfType: (inDay: any, inType: string, inValue: number) => Date;
export declare const getSqlTime: (inValue: Date) => string;
export declare const getMongoCurrentTime: () => string;
export declare const getMongoTime: (inValue: Date) => string;
export declare const getTimeFromStr: (inValue: string) => false | Date;
export declare const getMySqlStartDayTime: (inYear: number, inMonth: number, inDay: number) => string;
export declare const getMongoStartDayTime: (inYear: number, inMonth: number, inDay: number) => string;
export declare const getMongoEndDayTime: (inYear: number, inMonth: number, inDay: number) => string;
