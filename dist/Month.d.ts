import * as React from "react";
import { Month_Type } from "./utils/data";
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
    render(): JSX.Element;
}
export {};
