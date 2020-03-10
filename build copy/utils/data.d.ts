export interface Day_Type {
    date: string | null;
    type: string | null;
}
export declare type Week_Type = Day_Type[];
export interface Month_Type {
    year: number;
    month: number;
    id: string;
}
export declare function getMonths(pastYearRange: number, futureYearRange: number): any;
export declare function getWeeks(month: string, startDate: string | null, endDate: string | null): any;
