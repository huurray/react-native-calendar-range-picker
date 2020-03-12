import React from 'react';
import moment from 'moment';
// components
import CalendarList from './CalendarList';
// data
import {LOCALE, LOCALE_TYPE} from './utils/locale';

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
  startDate: string | null;
  endDate: string | null;
}
interface State {
  startDate: string | null;
  endDate: string | null;
}
interface Props {
  pastYearRange?: number;
  futureYearRange?: number;
  locale?: LOCALE_TYPE;
  startDate?: string;
  endDate?: string;
  onChange: (params: onChangeParams | any) => void;
  style?: Style;
  singleSelectMode?: boolean;
  initialNumToRender?: number;
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
    };

    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  setStartDate(startDate: string) {
    const {onChange, singleSelectMode} = this.props;
    this.setState({startDate, endDate: null});

    if (singleSelectMode) {
      onChange(startDate);
    } else {
      onChange({startDate, endDate: null});
    }
  }

  setEndDate(startDate: string, endDate: string) {
    const {onChange} = this.props;
    this.setState({endDate});
    onChange({startDate, endDate});
  }

  onPress(date: string) {
    const {startDate, endDate} = this.state;
    const {singleSelectMode} = this.props;

    if (singleSelectMode) {
      this.setState({startDate: date});
      return;
    }

    if (!startDate && !endDate) {
      this.setStartDate(date);
      return;
    }

    if (startDate && endDate) {
      this.setStartDate(date);
      return;
    }

    if (startDate) {
      if (moment(date).isBefore(startDate)) {
        this.setStartDate(date);
      } else {
        this.setEndDate(startDate, date);
      }
    }
  }

  render() {
    const {
      pastYearRange = 1,
      futureYearRange = 2,
      initialNumToRender = 10,
      locale = LOCALE,
      style,
    } = this.props;
    const {startDate, endDate} = this.state;

    return (
      <CalendarList
        initialNumToRender={initialNumToRender}
        pastYearRange={pastYearRange}
        futureYearRange={futureYearRange}
        locale={locale}
        onPress={this.onPress}
        startDate={startDate}
        endDate={endDate}
        style={style}
      />
    );
  }
}
