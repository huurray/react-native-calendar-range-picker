import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// components
import Day from './Day';
// types
import {LOCALE_TYPE} from './utils/locale';
import {Week_Type} from './utils/data';
import {Style} from './index';

interface Props {
  week: Week_Type;
  locale: LOCALE_TYPE;
  onPress: (date: string) => void;
  is6Weeks: boolean;
  style?: Style;
}

export default class Week extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    if (JSON.stringify(nextProps.week) === JSON.stringify(this.props.week))
      return false;

    return true;
  }

  renderDayNames() {
    const result = [];

    for (let i = 0; i < 7; i++) {
      const day = this.props.week[i];
      const DayComponent = day.date ? (
        <TouchableOpacity
          style={{
            flex: 1,
            height: this.props.is6Weeks ? 45 : 50,
            alignItems: 'center',
          }}
          onPress={() => this.props.onPress(day.date || '')}
          activeOpacity={1}
          key={day.date || i}>
          <Day day={day} locale={this.props.locale} style={this.props.style} />
        </TouchableOpacity>
      ) : (
        <View
          style={{flex: 1, height: this.props.is6Weeks ? 45 : 50}}
          key={i}
        />
      );
      result.push(DayComponent);
    }
    return result;
  }

  render() {
    return (
      <View style={[styles.weekContainer, this.props.style?.weekContainer]}>
        {this.renderDayNames()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
