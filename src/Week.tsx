import * as React from "react";
import { View, StyleSheet } from "react-native";
import * as moment from "moment";
// components
import Day from "./Day";
// types
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
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    if (JSON.stringify(nextProps.week) === JSON.stringify(this.props.week))
      return false;

    return true;
  }

  renderDayNames() {
    const result = [];
    const today = moment().format("YYYY-MM-DD");

    for (let i = 0; i < 7; i++) {
      const targetWeek = this.props.week[i];
      const DayComponent = targetWeek.date ? (
        <Day
          day={targetWeek}
          key={targetWeek.date}
          locale={this.props.locale}
          onPress={this.props.onPress}
          containerStyle={{ height: this.props.is6Weeks ? 45 : 50 }}
          isToday={targetWeek.date === today}
          isHoliday={i === 0 || i === 6}
          style={this.props.style}
        />
      ) : (
        <View style={{ flex: 1, height: 50 }} key={i} />
      );
      result.push(DayComponent);
    }
    return result;
  }

  render() {
    return (
      <View style={[styles.weekContainer, this.props.style?.weekContainer]}>
        {this.renderDayNames()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
