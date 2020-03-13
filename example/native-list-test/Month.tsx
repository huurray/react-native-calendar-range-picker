import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';
// components
import Week from './Week';
// types
import {getWeeks, Week_Type, Month_Type} from './utils/data';
import {LOCALE_TYPE} from './utils/locale';
import {Style} from './index';

interface Props {
  item: Month_Type;
  locale: LOCALE_TYPE;
  onPress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  style?: Style;
}

const Month = ({month, handleChange, locale, style}: any) => {
  const {id, weeks} = month;
  const renderMonthName = () => {
    const splitId = id.split('-');
    return (
      <Text style={[styles.monthName, style?.monthName]}>
        {splitId[0]}
        {locale.year} {locale.monthNames[Number(splitId[1]) - 1]}
      </Text>
    );
  };

  const renderDayNames = React.useCallback(() => {
    const result = [];
    const dayNames = locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, style?.dayName]}>{dayNames[i]}</Text>
        </View>,
      );
    }
    return result;
  }, []);

  const renderWeeks = () => {
    const result = [];
    const is6Weeks = weeks.length > 5;

    for (let i = 0; i < weeks.length; i++) {
      result.push(
        <Week
          key={i}
          week={weeks[i]}
          locale={locale}
          handleChange={handleChange}
          is6Weeks={is6Weeks}
        />,
      );
    }
    return result;
  };

  return (
    <View style={[styles.container, style?.monthContainer]}>
      <View style={styles.monthNameContainer}>{renderMonthName()}</View>
      <View style={styles.dayNamesContainer}>{renderDayNames()}</View>
      {renderWeeks()}
    </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  monthNameContainer: {
    paddingLeft: 20,
  },
  monthName: {
    fontSize: 16,
  },
  dayNamesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
  },
  dayName: {
    fontSize: 15,
    color: '#bababe',
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
