import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as moment from "moment";
// components
import Week from "./Week";
// types
import { getWeeks, Week_Type, Month_Type } from "./utils/data";
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
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    const newId = nextProps.item.id;
    if (
      nextProps.startDate &&
      moment(nextProps.startDate).format("YYYY-MM") == newId
    ) {
      return true;
    }

    if (
      nextProps.endDate &&
      moment(nextProps.endDate).format("YYYY-MM") == newId
    ) {
      return true;
    }

    if (
      this.props.startDate &&
      moment(this.props.startDate).format("YYYY-MM") == newId
    ) {
      return true;
    }

    if (
      this.props.endDate &&
      moment(this.props.endDate).format("YYYY-MM") == newId
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

    return false;
  }

  render() {
    const {
      item: { id, year, month },
      startDate,
      endDate,
      locale,
      onPress,
      style
    } = this.props;

    const weeks: Week_Type[] = getWeeks(id, startDate, endDate);
    const is6Weeks = weeks.length > 5;
    return (
      <View style={[styles.container, style?.monthContainer]}>
        <View style={styles.monthNameContainer}>
          <Text style={[styles.monthName, style?.monthName]}>
            {year}
            {locale.year} {locale.monthNames[month - 1]}
          </Text>
        </View>
        <View style={styles.dayNamesContainer}>
          {locale.dayNames.map((day: string, i: number) => (
            <View key={i} style={styles.dayNameContainer}>
              <Text style={[styles.dayName, style?.dayName]}>{day}</Text>
            </View>
          ))}
        </View>
        <View>
          {weeks.map((week: Week_Type, i: number) => (
            <Week
              key={i}
              week={week}
              locale={locale}
              onPress={onPress}
              is6Weeks={is6Weeks}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  monthNameContainer: {
    paddingLeft: 20
  },
  monthName: {
    fontSize: 16
  },
  dayNamesContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  dayNameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60
  },
  dayName: {
    fontSize: 15,
    color: "#bababe"
  },
  dayContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
