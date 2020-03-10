import React, { useMemo, useCallback } from "react";
import moment from "moment";
import { FlatList, View } from "react-native";
// components
import Calendar from "./Calendar";
// data
import { getMonths } from "./utils/data";
export var LAYOUT_HEIGHT = 370;
var CalendarList = function (_a) {
    var pastYearRange = _a.pastYearRange, futureYearRange = _a.futureYearRange, locale = _a.locale, onPress = _a.onPress, startDate = _a.startDate, endDate = _a.endDate, style = _a.style;
    var months = useMemo(function () { return getMonths(pastYearRange, futureYearRange); }, [pastYearRange, futureYearRange]);
    var getInitialIndex = useCallback(function () {
        return months.findIndex(function (month) {
            var targetDate = startDate ? moment(startDate) : moment();
            return month.id === targetDate.format("YYYY-MM");
        });
    }, [startDate]);
    return (<FlatList keyExtractor={function (item) { return item.id; }} data={months} renderItem={function (_a) {
        var item = _a.item;
        return (<View style={{
            height: LAYOUT_HEIGHT
        }}>
          <Calendar item={item} locale={locale} onPress={onPress} startDate={startDate} endDate={endDate}/>
        </View>);
    }} getItemLayout={function (_, index) { return ({
        length: LAYOUT_HEIGHT,
        offset: LAYOUT_HEIGHT * index,
        index: index
    }); }} initialScrollIndex={getInitialIndex()} style={style === null || style === void 0 ? void 0 : style.container}/>);
};
export default CalendarList;
//# sourceMappingURL=CalendarList.js.map