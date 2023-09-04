import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// components
import Day from "./Day";
// types
import { LOCALE_TYPE } from "./utils/locale";
import { Week_Type } from "./utils/data";
import { Style } from "./index";

interface Props {
  week: Week_Type;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  is6Weeks: boolean;
  disabledBeforeToday?: boolean;
  disabledAfterToday?: boolean;
  style?: Style;
}

function Week({
  week,
  locale,
  handlePress,
  is6Weeks,
  disabledBeforeToday,
  disabledAfterToday,
  style,
}: Props) {
  const renderDayNames = () => {
    const result = [];
    for (let i = 0; i < 7; i++) {
      const day = week[i];
      const DayComponent = day.date ? (
        <TouchableOpacity
          disabled={
            (disabledBeforeToday && day.isBeforeToday) || (disabledAfterToday && day.isAfterToday)
          }
          style={{
            flex: 1,
            height: is6Weeks ? 45 : 50,
            alignItems: "center",
          }}
          onPress={() => handlePress(day.date || "")}
          activeOpacity={1}
          key={day.date || i}
        >
          <Day
            day={day}
            locale={locale}
            disabledBeforeToday={disabledBeforeToday}
            disabledAfterToday={disabledAfterToday}
            style={style}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1, height: is6Weeks ? 45 : 50 }} key={i} />
      );
      result.push(DayComponent);
    }
    return result;
  };

  return <View style={[styles.weekContainer, style?.weekContainer]}>{renderDayNames()}</View>;
}

function areEqual(prevProps: Props, nextProps: Props) {
  if (JSON.stringify(prevProps.week) === JSON.stringify(nextProps.week)) return true;
  return false;
}

export default memo(Week, areEqual);

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
