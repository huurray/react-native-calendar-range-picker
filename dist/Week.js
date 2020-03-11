"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var moment = require("moment");
// components
var Day_1 = require("./Day");
var Week = function (_a) {
    var week = _a.week, locale = _a.locale, onPress = _a.onPress, is6Weeks = _a.is6Weeks, style = _a.style;
    return React.useMemo(function () { return (<react_native_1.View style={[styles.weekContainer, style === null || style === void 0 ? void 0 : style.weekContainer]}>
        {week.map(function (day, i) { return (<Day_1.default day={day} key={i} locale={locale} onPress={onPress} containerStyle={{ height: is6Weeks ? 45 : 50 }} isToday={day.date === moment().format("YYYY-MM-DD")} isHoliday={i === 0 || i === 6} style={style}/>); })}
      </react_native_1.View>); }, [
        locale.today,
        onPress,
        is6Weeks,
        JSON.stringify(week),
        JSON.stringify(style)
    ]);
};
var styles = react_native_1.StyleSheet.create({
    weekContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});
exports.default = Week;
