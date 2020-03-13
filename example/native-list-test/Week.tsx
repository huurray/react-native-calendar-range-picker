import React from 'react';
import {View, StyleSheet} from 'react-native';
import moment from 'moment';
// components
import Day from './Day';
// types
import {LOCALE_TYPE} from './utils/locale';
import {Week_Type} from './utils/data';
import {Style} from './index';

interface Props {
  week: Week_Type;
  locale: LOCALE_TYPE;
  handleChange: (date: string) => void;
  is6Weeks: boolean;
  style?: Style;
}

const Week = ({week, handleChange, locale, style, is6Weeks}: any) => {
  const renderWeek = () => {
    const result = [];
    const today = moment().format('YYYY-MM-DD');

    for (let i = 0; i < 7; i++) {
      const targetWeek = week[i];
      const DayComponent = targetWeek.date ? (
        <Day
          day={targetWeek}
          key={targetWeek.date}
          locale={locale}
          handleChange={handleChange}
          containerStyle={{height: is6Weeks ? 45 : 50}}
          isToday={targetWeek.date === today}
          isHoliday={i === 0 || i === 6}
          style={style}
        />
      ) : (
        <View style={{flex: 1, height: 50}} key={i} />
      );
      result.push(DayComponent);
    }
    return result;
  };

  return (
    <View style={[styles.weekContainer, style?.weekContainer]}>
      {renderWeek()}
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
