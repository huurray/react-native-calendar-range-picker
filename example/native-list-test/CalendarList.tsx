import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import moment from 'moment';
import {
  RecyclerListView,
  LayoutProvider,
  DataProvider,
  ContextProvider,
} from 'recyclerlistview';
// components
import Month from './Month';
// data
import {getMonths} from './utils/data';
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

const {width} = Dimensions.get('window');
const LAYOUT_HEIGHT = 370;

export default class CalendarList extends React.Component<any, any> {
  layoutProvider: any;
  constructor(props: any) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }).cloneWithRows(
        getMonths(
          this.props.pastYearRange,
          this.props.futureYearRange,
          this.props.startDate,
          this.props.endDate,
        ),
      ),
    };
    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.dataProvider.getDataForIndex(i).type;
      },
      (type, dim) => {
        switch (type) {
          case 'month':
            dim.width = width;
            dim.height = LAYOUT_HEIGHT;
            break;
          default:
            dim.width = width;
            dim.height = 0;
        }
      },
    );
    this.handleRowRenderer = this.handleRowRenderer.bind(this);
  }

  handleRowRenderer(type: any, month: any) {
    return (
      <Month
        month={month}
        locale={this.props.locale}
        handleChange={this.props.handleChange}
        style={this.props.style}
      />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <RecyclerListView
          rowRenderer={this.handleRowRenderer}
          dataProvider={this.state.dataProvider}
          layoutProvider={this.layoutProvider}
        />
      </View>
    );
  }
}
