import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
// components
import Day from './Day';
// types
import {getDays, Day_Type, Month_Type} from './utils/data';
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

const PADDING_HORIZONTAL = 10;
const {width: SCREEN_WIDTH} = Dimensions.get('window');
export default class Month extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    const newId = nextProps.item.id;
    if (
      nextProps.startDate &&
      moment(nextProps.startDate).format('YYYY-MM') == newId
    ) {
      return true;
    }

    if (
      nextProps.endDate &&
      moment(nextProps.endDate).format('YYYY-MM') == newId
    ) {
      return true;
    }

    if (
      this.props.startDate &&
      moment(this.props.startDate).format('YYYY-MM') == newId
    ) {
      return true;
    }

    if (
      this.props.endDate &&
      moment(this.props.endDate).format('YYYY-MM') == newId
    ) {
      return true;
    }

    if (
      nextProps.startDate &&
      nextProps.endDate &&
      moment(nextProps.startDate).format('YYYYMM') <
        moment(newId).format('YYYYMM') &&
      moment(nextProps.endDate).format('YYYYMM') >
        moment(newId).format('YYYYMM')
    ) {
      return true;
    }

    if (
      this.props.endDate &&
      this.props.startDate &&
      moment(this.props.startDate).format('YYYYMM') <
        moment(newId).format('YYYYMM') &&
      moment(this.props.endDate).format('YYYYMM') >
        moment(newId).format('YYYYMM')
    ) {
      return true;
    }

    return false;
  }

  renderDayNames() {
    const result = [];
    const dayNames = this.props.locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, this.props.style?.dayNameText]}>
            {dayNames[i]}
          </Text>
        </View>,
      );
    }
    return result;
  }

  renderDays() {
    const result = [];
    const days: Day_Type[] = getDays(
      this.props.item.id,
      this.props.startDate,
      this.props.endDate,
    );
    const is6Weeks = days.length > 7 * 5;

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      let dayComponent = (
        <View
          style={{width: (SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 7}}
          key={i}
        />
      );
      if (day.date) {
        dayComponent = (
          <TouchableOpacity
            style={{
              width: (SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 7,
              height: is6Weeks ? 45 : 50,
              alignItems: 'center',
            }}
            onPress={() => this.props.onPress(day.date || '')}
            activeOpacity={1}
            key={day.date || i}>
            <Day
              day={day}
              locale={this.props.locale}
              style={this.props.style}
            />
          </TouchableOpacity>
        );
      }
      result.push(dayComponent);
    }
    return result;
  }

  render() {
    const {
      item: {year, month},
      locale,
      style,
    } = this.props;

    return (
      <View style={[styles.monthContainer, style?.monthContainer]}>
        <View style={styles.monthNameContainer}>
          <Text style={[styles.monthName, style?.monthNameText]}>
            {year}
            {locale.year} {locale.monthNames[month - 1]}
          </Text>
        </View>
        <View style={styles.dayNamesContainer}>{this.renderDayNames()}</View>
        <View style={styles.dayContainer}>{this.renderDays()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthContainer: {
    paddingTop: 20,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: 30,
    backgroundColor: '#fff',
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
    flexWrap: 'wrap',
  },
});
