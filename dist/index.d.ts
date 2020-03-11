import * as React from "react";
import { LOCALE_TYPE } from "./utils/locale";
export interface Style {
    container?: {};
    monthContainer?: {};
    monthName?: {};
    dayName?: {};
    weekContainer?: {};
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
    onChange: (params: onChangeParams | any) => void;
    style?: Style;
    singleSelectMode?: boolean;
    initialNumToRender?: number;
}
export default class Index extends React.Component<Props, State> {
    constructor(props: Props);
    setStartDate(startDate: string): void;
    setEndDate(startDate: string, endDate: string): void;
    onPress(date: string): void;
    render(): JSX.Element;
}
export {};
