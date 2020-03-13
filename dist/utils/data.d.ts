export interface Day_Type {
    date: string | null;
    type: string | null;
    isToday: boolean;
    isHoliday: boolean;
}
export interface Month_Type {
    year: number;
    month: number;
    id: string;
}
export declare function getMonths(pastYearRange: number, futureYearRange: number): any;
export declare function getDays(month: string, startDate: string | null, endDate: string | null): any;
