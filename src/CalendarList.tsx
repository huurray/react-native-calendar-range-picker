import React, {useMemo, useCallback} from 'react';
import dayjs from 'dayjs';
import {FlatList, View, ActivityIndicator, FlatListProps} from 'react-native';
// components
import Month from './Month';
// data
import {getMonths} from './utils/data';
// types
import {Month_Type} from './utils/data';
import {LOCALE_TYPE} from './utils/locale';
import {Style} from './index';

interface Props {
  pastYearRange: number;
  futureYearRange: number;
  initialNumToRender: number;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  style?: Style;
  flatListProps?: FlatListProps<Month_Type>;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
  disabledAfterToday?: boolean;
}

const LAYOUT_HEIGHT = 370;
const CalendarList = ({
  pastYearRange,
  futureYearRange,
  initialNumToRender,
  locale,
  handlePress,
  startDate,
  endDate,
  flatListProps,
  isMonthFirst,
  disabledBeforeToday,
  disabledAfterToday,
  style,
}: Props) => {
  const months: Month_Type[] = useMemo(
    () => getMonths(pastYearRange, futureYearRange),
    [pastYearRange, futureYearRange],
  );

  const getInitialIndex = useCallback(() => {
    return months.findIndex((month: Month_Type) => {
      const targetDate = startDate ? dayjs(startDate) : dayjs();
      return month.id === targetDate.format('YYYY-MM');
    });
  }, []);

  const handleRenderItem = useCallback(
    ({item}: {item: Month_Type}) => (
      <View
        style={[
          {height: LAYOUT_HEIGHT, backgroundColor: '#fff'},
          style?.monthOverlayContainer,
        ]}>
        <Month
          item={item}
          locale={locale}
          handlePress={handlePress}
          startDate={startDate}
          endDate={endDate}
          isMonthFirst={isMonthFirst}
          disabledBeforeToday={disabledBeforeToday}
          disabledAfterToday={disabledAfterToday}
          style={style}
        />
      </View>
    ),
    [locale.today, startDate, endDate],
  );

  return (
    <View
      style={[
        {position: 'relative', backgroundColor: '#fff'},
        style?.container,
      ]}>
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator />
      </View>
      <FlatList
        keyExtractor={(item: Month_Type) => item.id}
        data={months}
        renderItem={handleRenderItem}
        getItemLayout={(_, index) => ({
          length: LAYOUT_HEIGHT,
          offset: LAYOUT_HEIGHT * index,
          index,
        })}
        initialScrollIndex={getInitialIndex()}
        initialNumToRender={initialNumToRender}
        {...flatListProps}
      />
    </View>
  );
};

export default CalendarList;
