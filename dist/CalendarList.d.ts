/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
interface Props {
    pastYearRange: number;
    futureYearRange: number;
    initialNumToRender: number;
    locale: LOCALE_TYPE;
    onPress: (date: string) => void;
    startDate: string | null;
    endDate: string | null;
    style?: Style;
}
declare const CalendarList: ({ pastYearRange, futureYearRange, initialNumToRender, locale, onPress, startDate, endDate, style }: Props) => JSX.Element;
export default CalendarList;
