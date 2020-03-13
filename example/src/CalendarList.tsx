import React from 'react';
import moment from 'moment';
import {FlatList, View, ActivityIndicator} from 'react-native';
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
  onPress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  style?: Style;
}

const LAYOUT_HEIGHT = 370;
const CalendarList = ({
  pastYearRange,
  futureYearRange,
  initialNumToRender,
  locale,
  onPress,
  startDate,
  endDate,
  style,
}: Props) => {
  const months: Month_Type[] = React.useMemo(
    () => getMonths(pastYearRange, futureYearRange),
    [pastYearRange, futureYearRange],
  );

  const getInitialIndex = React.useCallback(() => {
    return months.findIndex((month: Month_Type) => {
      const targetDate = startDate ? moment(startDate) : moment();
      return month.id === targetDate.format('YYYY-MM');
    });
  }, []);

  const handleRenderItem = React.useCallback(
    ({_, item}) => (
      <View
        style={{
          height: LAYOUT_HEIGHT,
          backgroundColor: '#fff',
        }}>
        <Month
          item={item}
          locale={locale}
          onPress={onPress}
          startDate={startDate}
          endDate={endDate}
        />
      </View>
    ),
    [locale.today, onPress, startDate, endDate],
  );

  return (
    <View style={[{position: 'relative'}, style?.container]}>
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
        windowSize={61}
      />
    </View>
  );
};

export default CalendarList;
