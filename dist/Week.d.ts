import * as React from "react";
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
export default class Week extends React.Component<Props> {
    constructor(props: Props);
    shouldComponentUpdate(nextProps: Props): boolean;
    renderDayNames(): JSX.Element[];
    render(): JSX.Element;
}
export {};
