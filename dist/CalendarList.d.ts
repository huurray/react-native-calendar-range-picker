/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
interface Props {
    pastYearRange: number;
    futureYearRange: number;
    locale: LOCALE_TYPE;
    onPress: (date: string) => void;
    startDate: string | null;
    endDate: string | null;
    style?: Style;
}
export declare const LAYOUT_HEIGHT = 370;
declare const CalendarList: ({ pastYearRange, futureYearRange, locale, onPress, startDate, endDate, style }: Props) => JSX.Element;
export default CalendarList;
