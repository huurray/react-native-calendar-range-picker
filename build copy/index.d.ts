import { Component } from "react";
import { LOCALE_TYPE } from "./utils/locale";
export interface Style {
    container?: {};
    monthContainer?: {};
    monthName?: {};
    dayName?: {};
    dayContainer?: {};
    day?: {};
    dayTextColor?: string;
    holidayColor?: string;
    todayColor?: string;
    selectedDayTextColor?: string;
    selectedDayBackgroundColor?: string;
    selectedBetweenDayTextColor?: string;
    selectedBetweenDayBackgroundTextColor?: string;
}
interface onChangeParams {
    startDate: string | null;
    endDate: string | null;
}
interface State {
    startDate: string | null;
    endDate: string | null;
}
interface Props {
    pastYearRange?: number;
    futureYearRange?: number;
    locale?: LOCALE_TYPE;
    startDate?: string;
    endDate?: string;
    onChange: (params: onChangeParams | string) => void;
    style?: Style;
    singleSelectMode?: boolean;
}
export default class Index extends Component<Props, State> {
    constructor(props: Props);
    setStartDate(startDate: string): void;
    setEndDate(startDate: string, endDate: string): void;
    onPress(date: string): void;
    render(): JSX.Element;
}
export {};
