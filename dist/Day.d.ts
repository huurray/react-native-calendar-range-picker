/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
import { Day_Type } from "./utils/data";
import { Style } from "./index";
interface Props {
    containerStyle?: {};
    day: Day_Type;
    locale: LOCALE_TYPE;
    onPress: (date: any) => void;
    isToday: boolean;
    isHoliday: boolean;
    style?: Style;
}
declare const Day: ({ day, locale, onPress, isHoliday, isToday, containerStyle, style }: Props) => JSX.Element;
export default Day;
