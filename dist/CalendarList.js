"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment = require("moment");
var react_native_1 = require("react-native");
// components
var Month_1 = require("./Month");
// data
var data_1 = require("./utils/data");
var LAYOUT_HEIGHT = 370;
var CalendarList = function (_a) {
    var pastYearRange = _a.pastYearRange, futureYearRange = _a.futureYearRange, initialNumToRender = _a.initialNumToRender, locale = _a.locale, onPress = _a.onPress, startDate = _a.startDate, endDate = _a.endDate, style = _a.style;
    var months = React.useMemo(function () { return data_1.getMonths(pastYearRange, futureYearRange); }, [pastYearRange, futureYearRange]);
    var getInitialIndex = React.useCallback(function () {
        return months.findIndex(function (month) {
            var targetDate = startDate ? moment(startDate) : moment();
            return month.id === targetDate.format("YYYY-MM");
        });
    }, []);
    var handleRenderItem = React.useCallback(function (_a) {
        var _ = _a._, item = _a.item;
        return (<react_native_1.View style={{
            height: LAYOUT_HEIGHT
        }}>
        <Month_1.default item={item} locale={locale} onPress={onPress} startDate={startDate} endDate={endDate}/>
      </react_native_1.View>);
    }, [locale.today, onPress, startDate, endDate]);
    return (<react_native_1.View style={[
        { flex: 1, position: "relative", backgroundColor: "#fff" },
        style === null || style === void 0 ? void 0 : style.container
    ]}>
      <react_native_1.View style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <react_native_1.ActivityIndicator />
      </react_native_1.View>
      <react_native_1.FlatList keyExtractor={function (item) { return item.id; }} data={months} renderItem={handleRenderItem} getItemLayout={function (_, index) { return ({
        length: LAYOUT_HEIGHT,
        offset: LAYOUT_HEIGHT * index,
        index: index
    }); }} initialScrollIndex={getInitialIndex()} initialNumToRender={initialNumToRender} windowSize={61}/>
    </react_native_1.View>);
};
exports.default = CalendarList;
