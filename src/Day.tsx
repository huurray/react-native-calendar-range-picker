import React, { useMemo, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";
// types
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
const Day = ({
  day,
  locale,
  onPress,
  isHoliday,
  isToday,
  containerStyle,
  style
}: Props) => {
  const { date, type } = day;

  const dayTextColor = style?.dayTextColor || "#1d1c1d";
  const holidayColor = style?.holidayColor || "#f26522";
  const todayColor = style?.todayColor || "#1692e4";
  const selectedDayTextColor = style?.selectedDayTextColor || "#fff";
  const selectedDayBackgroundColor =
    style?.selectedDayBackgroundColor || "#83bc44";
  const selectedBetweenDayTextColor =
    style?.selectedBetweenDayTextColor || "#1d1c1d";
  const selectedBetweenDayBackgroundTextColor =
    style?.selectedBetweenDayBackgroundTextColor || "#F2F2F2";

  const getTextColor = useCallback(() => {
    if (type === "start" || type === "end" || type === "single")
      return selectedDayTextColor;
    if (type === "between") return selectedBetweenDayTextColor;
    if (isToday) return todayColor;
    if (isHoliday) return holidayColor;
    return dayTextColor;
  }, [type, dayTextColor, holidayColor, todayColor, selectedDayTextColor]);

  const mark = useMemo(
    () => (
      <>
        {type === "end" || type === "between" ? (
          <View
            style={{
              left: 0,
              width: 30,
              height: 30,
              backgroundColor: selectedBetweenDayBackgroundTextColor,
              position: "absolute",
              top: -5
            }}
          />
        ) : null}
        {type === "start" || type === "between" ? (
          <View
            style={{
              right: 0,
              width: 30,
              height: 30,
              backgroundColor: selectedBetweenDayBackgroundTextColor,
              position: "absolute",
              top: -5
            }}
          />
        ) : null}
        {type === "start" || type === "end" || type === "single" ? (
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: selectedDayBackgroundColor,
              borderRadius: 15,
              position: "absolute",
              alignSelf: "center",
              top: -5
            }}
          />
        ) : null}
      </>
    ),
    [type, selectedDayBackgroundColor, selectedDayBackgroundColor]
  );

  return useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={1}
        disabled={!date}
        style={[styles.dayContainer, containerStyle, style?.dayContainer]}
        onPress={() => onPress(date)}
      >
        {mark}
        {date ? (
          <Text
            style={[
              styles.day,
              {
                color: getTextColor()
              },
              style?.day
            ]}
          >
            {moment(date).date()}
          </Text>
        ) : null}
        {isToday ? (
          <Text style={[styles.today, { color: todayColor }]}>
            {locale.today}
          </Text>
        ) : null}
      </TouchableOpacity>
    ),
    [locale.today, mark, getTextColor, onPress]
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    height: 50,
    alignItems: "center",
    position: "relative"
  },
  day: {
    fontSize: 15
  },
  today: {
    fontSize: 12,
    marginTop: 7
  }
});

export default Day;
