import React, {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import dayjs from 'dayjs';
// components
import Week from './Week';
// types
import {getWeeks, Month_Type, Week_Type} from './utils/data';
import {LOCALE_TYPE} from './utils/locale';
import {Style} from './index';

interface Props {
  item: Month_Type;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
  disabledAfterToday?: boolean;
  style?: Style;
}

const PADDING_HORIZONTAL = 10;
function Month({
  item,
  locale,
  handlePress,
  startDate,
  endDate,
  isMonthFirst,
  disabledBeforeToday,
  disabledAfterToday,
  style,
}: Props) {
  const {year, month} = item;

  const renderDayNames = () => {
    const result = [];
    const dayNames = locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, style?.dayNameText]}>
            {dayNames[i]}
          </Text>
        </View>,
      );
    }
    return result;
  };

  const renderWeeks = () => {
    const result = [];
    const weeks: Week_Type[] = getWeeks(item.id, startDate, endDate);
    const is6Weeks = weeks.length > 5;

    for (let i = 0; i < weeks.length; i++) {
      result.push(
        <Week
          key={i}
          week={weeks[i]}
          locale={locale}
          handlePress={handlePress}
          is6Weeks={is6Weeks}
          disabledBeforeToday={disabledBeforeToday}
          disabledAfterToday={disabledAfterToday}
          style={style}
        />,
      );
    }
    return result;
  };

  return (
    <View style={[styles.monthContainer, style?.monthContainer]}>
      <View style={styles.monthNameContainer}>
        <Text style={[styles.monthName, style?.monthNameText]}>
          {isMonthFirst ? <Text>{locale.monthNames[month - 1]} </Text> : null}
          {year}
          {locale.year}
          {!isMonthFirst ? <Text> {locale.monthNames[month - 1]}</Text> : null}
        </Text>
      </View>
      <View style={styles.dayNamesContainer}>{renderDayNames()}</View>
      {renderWeeks()}
    </View>
  );
}

function areEqual(prevProps: Props, nextProps: Props) {
  const newId = nextProps.item.id;
  if (
    nextProps.startDate &&
    dayjs(nextProps.startDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    nextProps.endDate &&
    dayjs(nextProps.endDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    prevProps.startDate &&
    dayjs(prevProps.startDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    dayjs(prevProps.endDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    nextProps.startDate &&
    nextProps.endDate &&
    dayjs(nextProps.startDate).format('YYYYMM') <
      dayjs(newId).format('YYYYMM') &&
    dayjs(nextProps.endDate).format('YYYYMM') > dayjs(newId).format('YYYYMM')
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    prevProps.startDate &&
    dayjs(prevProps.startDate).format('YYYYMM') <
      dayjs(newId).format('YYYYMM') &&
    dayjs(prevProps.endDate).format('YYYYMM') > dayjs(newId).format('YYYYMM')
  ) {
    return false;
  }

  if (
    prevProps.locale &&
    nextProps.locale &&
    prevProps.locale.today !== nextProps.locale.today
  ) {
    return false;
  }

  return true;
}

export default memo(Month, areEqual);

const styles = StyleSheet.create({
  monthContainer: {
    paddingTop: 20,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#fff',
  },
  monthNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 16,
  },
  monthName: {
    fontSize: 16,
  },
  dayNamesContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayName: {
    fontSize: 15,
    color: '#bababe',
  },
  dayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
