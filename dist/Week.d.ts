/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
import { Week_Type } from "./utils/data";
import { Style } from "./index";
interface Props {
    week: Week_Type;
    locale: LOCALE_TYPE;
    onPress: (date: string) => void;
    is6Weeks: boolean;
    style?: Style;
}
declare const Week: ({ week, locale, onPress, is6Weeks, style }: Props) => JSX.Element;
export default Week;
