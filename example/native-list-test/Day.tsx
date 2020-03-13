import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
// types
import {LOCALE_TYPE} from './utils/locale';
import {Day_Type} from './utils/data';
import {Style} from './index';

interface Props {
  containerStyle?: {};
  day: Day_Type;
  locale: LOCALE_TYPE;
  handleChange: (date: any) => void;
  isToday: boolean;
  isHoliday: boolean;
  style?: Style;
}

const Day = ({
  day: {date, type},
  locale,
  handleChange,
  isHoliday,
  isToday,
  containerStyle,
  style,
}: any) => {
  const dayTextColor = style?.dayTextColor || '#1d1c1d';
  const holidayColor = style?.holidayColor || '#f26522';
  const todayColor = style?.todayColor || '#1692e4';
  const selectedDayTextColor = style?.selectedDayTextColor || '#fff';
  const selectedDayBackgroundColor =
    style?.selectedDayBackgroundColor || '#83bc44';
  const selectedBetweenDayTextColor =
    style?.selectedBetweenDayTextColor || '#1d1c1d';
  const selectedBetweenDayBackgroundTextColor =
    style?.selectedBetweenDayBackgroundTextColor || '#F2F2F2';

  let markStyle: any = {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  };
  let betweenStyle: any = {
    width: '50%',
    height: 30,
    position: 'absolute',
    backgroundColor: selectedBetweenDayBackgroundTextColor,
  };
  let dayStyle: any = {
    color: isHoliday ? holidayColor : dayTextColor,
  };

  switch (type) {
    case 'single':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      };
      dayStyle = {color: selectedDayTextColor};
      break;
    case 'start':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      };
      dayStyle = {color: selectedDayTextColor};
      break;
    case 'end':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
      };
      dayStyle = {color: selectedDayTextColor};
      break;
    case 'between':
      markStyle = {
        ...markStyle,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        width: '101%',
      };
      dayStyle = {
        color: isHoliday ? holidayColor : selectedBetweenDayTextColor,
      };

      break;

    default:
      break;
  }

  return (
    <TouchableOpacity
      onPress={() => handleChange(date)}
      activeOpacity={1}
      style={[
        {flex: 1, height: 50, alignItems: 'center', position: 'relative'},
        containerStyle,
        style?.dayContainer,
      ]}>
      {type === 'end' ? <View style={[betweenStyle, {left: 0}]} /> : null}
      {type === 'start' ? <View style={[betweenStyle, {right: 0}]} /> : null}
      {date ? (
        <View style={markStyle}>
          <Text style={[{fontSize: 15}, dayStyle, style?.day]}>
            {moment(date).date()}
          </Text>
        </View>
      ) : null}
      {isToday ? (
        <Text style={[{fontSize: 12}, {color: todayColor}]}>
          {locale.today}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Day;
