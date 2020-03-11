import * as React from "react";
import { View, StyleSheet } from "react-native";
import * as moment from "moment";
// components
import Day from "./Day";
// types
import { LOCALE_TYPE } from "./utils/locale";
import { Week_Type, Day_Type } from "./utils/data";
import { Style } from "./index";

interface Props {
  week: Week_Type;
  locale: LOCALE_TYPE;
  onPress: (date: string) => void;
  is6Weeks: boolean;
  style?: Style;
}
const Week = ({ week, locale, onPress, is6Weeks, style }: Props) => {
  return React.useMemo(
    () => (
      <View style={[styles.weekContainer, style?.weekContainer]}>
        {week.map((day: Day_Type, i: number) => (
          <Day
            day={day}
            key={i}
            locale={locale}
            onPress={onPress}
            containerStyle={{ height: is6Weeks ? 45 : 50 }}
            isToday={day.date === moment().format("YYYY-MM-DD")}
            isHoliday={i === 0 || i === 6}
            style={style}
          />
        ))}
      </View>
    ),
    [
      locale.today,
      onPress,
      is6Weeks,
      JSON.stringify(week),
      JSON.stringify(style)
    ]
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Week;
