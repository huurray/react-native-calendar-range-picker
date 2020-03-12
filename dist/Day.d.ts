import * as React from "react";
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
export default class Day extends React.Component<Props> {
    constructor(props: Props);
    shouldComponentUpdate(nextProps: Props): boolean;
    render(): JSX.Element;
}
export {};
