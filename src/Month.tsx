import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as moment from "moment";
// components
import Week from "./Week";
// types
import { getWeeks, Month_Type, Week_Type } from "./utils/data";
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

const PADDING_HORIZONTAL = 10;
export default class Month extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    const newId = nextProps.item.id;
    if (
      nextProps.startDate &&
      moment(nextProps.startDate).format("YYYY-MM") === newId
    ) {
      return true;
    }

    if (
      nextProps.endDate &&
      moment(nextProps.endDate).format("YYYY-MM") === newId
    ) {
      return true;
    }

    if (
      this.props.startDate &&
      moment(this.props.startDate).format("YYYY-MM") === newId
    ) {
      return true;
    }

    if (
      this.props.endDate &&
      moment(this.props.endDate).format("YYYY-MM") === newId
    ) {
      return true;
    }

    if (
      nextProps.startDate &&
      nextProps.endDate &&
      moment(nextProps.startDate).format("YYYYMM") <
        moment(newId).format("YYYYMM") &&
      moment(nextProps.endDate).format("YYYYMM") >
        moment(newId).format("YYYYMM")
    ) {
      return true;
    }

    if (
      this.props.endDate &&
      this.props.startDate &&
      moment(this.props.startDate).format("YYYYMM") <
        moment(newId).format("YYYYMM") &&
      moment(this.props.endDate).format("YYYYMM") >
        moment(newId).format("YYYYMM")
    ) {
      return true;
    }

    if (
      this.props.locale &&
      nextProps.locale &&
      this.props.locale.today !== nextProps.locale.today
    ) {
      return true;
    }

    return false;
  }

  renderDayNames() {
    const result = [];
    const dayNames = this.props.locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, this.props.style?.dayNameText]}>
            {dayNames[i]}
          </Text>
        </View>
      );
    }
    return result;
  }

  renderWeeks() {
    const result = [];
    const weeks: Week_Type[] = getWeeks(
      this.props.item.id,
      this.props.startDate,
      this.props.endDate
    );
    const is6Weeks = weeks.length > 5;

    for (let i = 0; i < weeks.length; i++) {
      result.push(
        <Week
          key={i}
          week={weeks[i]}
          locale={this.props.locale}
          onPress={this.props.onPress}
          is6Weeks={is6Weeks}
          style={this.props.style}
        />
      );
    }
    return result;
  }

  render() {
    const {
      item: { year, month },
      locale,
      style
    } = this.props;

    return (
      <View style={[styles.monthContainer, style?.monthContainer]}>
        <View style={styles.monthNameContainer}>
          <Text style={[styles.monthName, style?.monthNameText]}>
            {year}
            {locale.year}
          </Text>
          <Text
            style={[styles.monthName, { marginLeft: 5 }, style?.monthNameText]}
          >
            {locale.monthNames[month - 1]}
          </Text>
        </View>
        <View style={styles.dayNamesContainer}>{this.renderDayNames()}</View>
        {this.renderWeeks()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthContainer: {
    paddingTop: 20,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: "#fff"
  },
  monthNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    paddingLeft: 20
  },
  monthName: {
    fontSize: 16
  },
  dayNamesContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  dayNameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dayName: {
    fontSize: 15,
    color: "#bababe"
  },
  dayContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
