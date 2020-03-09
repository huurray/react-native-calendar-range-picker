import React, {useState, useCallback} from 'react';
import moment from 'moment';
// components
import CalendarList from './CalendarList';
// config
import {LOCALE, LOCALE_TYPE} from './utils/locale';

export interface Style {
  container?: {};
  monthContainer?: {};
  monthName?: {};
  dayName?: {};
  dayContainer?: {};
  day?: {};
  dayTextColor?: string;
  holidayColor?: string;
  todayColor?: string;
  selectedDayTextColor?: string;
  selectedDayBackgroundColor?: string;
  selectedBetweenDayTextColor?: string;
  selectedBetweenDayBackgroundTextColor?: string;
}
interface onChangeParams {
  startDate: string | null;
  endDate: string | null;
}
interface Props {
  yearRange?: number;
  locale?: LOCALE_TYPE;
  startDate?: string;
  endDate?: string;
  onChange: (params: onChangeParams | string) => void;
  style?: Style;
  singleSelectMode?: boolean;
}

const Index = ({
  style,
  yearRange = 2,
  locale = LOCALE,
  startDate: prevStartDate,
  endDate: prevEndDate,
  onChange,
  singleSelectMode,
}: Props) => {
  const [startDate, setStartDate] = useState(
    prevStartDate ? prevStartDate : null,
  );
  const [endDate, setEndDate] = useState(prevEndDate ? prevEndDate : null);

  const handleSetStartDate = useCallback(
    startDate => {
      setStartDate(startDate);
      setEndDate(null);
      if (singleSelectMode) {
        onChange(startDate);
      } else {
        onChange({startDate, endDate: null});
      }
    },
    [singleSelectMode],
  );

  const handleSetEndDate = useCallback((startDate, endDate) => {
    setEndDate(endDate);
    onChange({startDate, endDate});
  }, []);

  const onPress = useCallback(
    (date: string) => {
      if (singleSelectMode) {
        handleSetStartDate(date);
        return;
      }
      if (!startDate && !endDate) {
        handleSetStartDate(date);
        return;
      }

      if (startDate && endDate) {
        handleSetStartDate(date);
        return;
      }

      if (startDate) {
        if (moment(date).isBefore(startDate)) {
          handleSetStartDate(date);
        } else {
          handleSetEndDate(startDate, date);
        }
      }
    },
    [startDate, endDate],
  );

  return (
    <CalendarList
      yearRange={yearRange}
      locale={locale}
      onPress={onPress}
      startDate={startDate}
      endDate={endDate}
      style={style}
    />
  );
};

export default Index;
