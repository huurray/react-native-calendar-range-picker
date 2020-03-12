"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var moment = require("moment");
var Day = function (_a) {
    var day = _a.day, locale = _a.locale, onPress = _a.onPress, isHoliday = _a.isHoliday, isToday = _a.isToday, containerStyle = _a.containerStyle, style = _a.style;
    var date = day.date, type = day.type;
    var dayTextColor = (style === null || style === void 0 ? void 0 : style.dayTextColor) || "#1d1c1d";
    var holidayColor = (style === null || style === void 0 ? void 0 : style.holidayColor) || "#f26522";
    var todayColor = (style === null || style === void 0 ? void 0 : style.todayColor) || "#1692e4";
    var selectedDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedDayTextColor) || "#fff";
    var selectedDayBackgroundColor = (style === null || style === void 0 ? void 0 : style.selectedDayBackgroundColor) || "#83bc44";
    var selectedBetweenDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayTextColor) || "#1d1c1d";
    var selectedBetweenDayBackgroundTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayBackgroundTextColor) || "#F2F2F2";
    var getTextColor = React.useCallback(function () {
        if (type === "start" || type === "end" || type === "single")
            return selectedDayTextColor;
        if (type === "between")
            return selectedBetweenDayTextColor;
        if (isToday)
            return todayColor;
        if (isHoliday)
            return holidayColor;
        return dayTextColor;
    }, [type, dayTextColor, holidayColor, todayColor, selectedDayTextColor]);
    var mark = React.useMemo(function () { return (<>
        {type === "end" || type === "between" ? (<react_native_1.View style={{
        left: -2,
        width: 30,
        height: 30,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        position: "absolute",
        top: -5
    }}/>) : null}
        {type === "start" || type === "between" ? (<react_native_1.View style={{
        right: -2,
        width: 30,
        height: 30,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        position: "absolute",
        top: -5
    }}/>) : null}
        {type === "start" || type === "end" || type === "single" ? (<react_native_1.View style={{
        width: 30,
        height: 30,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
        position: "absolute",
        alignSelf: "center",
        top: -5
    }}/>) : null}
      </>); }, [type, selectedDayBackgroundColor, selectedDayBackgroundColor]);
    return React.useMemo(function () { return (<react_native_1.TouchableOpacity activeOpacity={1} disabled={!date} style={[styles.dayContainer, containerStyle, style === null || style === void 0 ? void 0 : style.dayContainer]} onPress={function () { return onPress(date); }}>
        {mark}
        {date ? (<react_native_1.Text style={[
        styles.day,
        {
            color: getTextColor()
        },
        style === null || style === void 0 ? void 0 : style.day
    ]}>
            {moment(date).date()}
          </react_native_1.Text>) : null}
        {isToday ? (<react_native_1.Text style={[styles.today, { color: todayColor }]}>
            {locale.today}
          </react_native_1.Text>) : null}
      </react_native_1.TouchableOpacity>); }, [locale.today, mark, getTextColor, onPress]);
};
var styles = react_native_1.StyleSheet.create({
    dayContainer: {
        flex: 1,
        height: 50,
        alignItems: "center",
        position: "relative"
    },
    day: {
        fontSize: 15
    },
    today: {
        fontSize: 12,
        marginTop: 7
    }
});
exports.default = Day;
