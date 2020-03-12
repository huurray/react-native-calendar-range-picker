import * as React from "react";
import { Week_Type, Month_Type } from "./utils/data";
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
interface Props {
    item: Month_Type;
    locale: LOCALE_TYPE;
    onPress: (date: string) => void;
    startDate: string | null;
    endDate: string | null;
    style?: Style;
}
export default class Month extends React.Component<Props> {
    constructor(props: Props);
    shouldComponentUpdate(nextProps: Props): boolean;
    renderDayNames(): JSX.Element[];
    renderWeeks(weeks: Week_Type[]): JSX.Element[];
    render(): JSX.Element;
}
export {};
