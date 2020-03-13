import React from 'react';
import moment from 'moment';
// data
import {LOCALE, LOCALE_TYPE} from './utils/locale';
// components
import CalendarList from './CalendarList';

export interface Style {
  container?: {};
  monthContainer?: {};
  monthName?: {};
  dayName?: {};
  weekContainer?: {};
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
  startDate: string;
  endDate: string;
}

interface Props {
  onChange: (params: onChangeParams | any) => void;
  pastYearRange?: number;
  futureYearRange?: number;
  locale?: LOCALE_TYPE;
  startDate?: string;
  endDate?: string;
  singleSelectMode?: boolean;
  style?: Style;
}

const Index = ({
  onChange,
  pastYearRange = 1,
  futureYearRange = 2,
  locale = LOCALE,
  startDate: initStartDate,
  endDate: initEndDate,
  singleSelectMode = false,
  style,
}: any) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleSetStartDate = React.useCallback((startDate: string) => {
    setStartDate(startDate);
    setEndDate('');

    if (singleSelectMode) {
      onChange(startDate);
    } else {
      onChange({startDate, endDate: null});
    }
  }, []);

  const handleSetEndDate = React.useCallback(
    (startDate: string, endDate: string) => {
      setEndDate(endDate);

      onChange({startDate, endDate});
    },
    [],
  );

  const handleChange = React.useCallback(
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
      startDate={startDate}
      endDate={endDate}
      locale={locale}
      handleChange={handleChange}
      style={style}
      pastYearRange={pastYearRange}
      futureYearRange={futureYearRange}
    />
  );
};

export default Index;
