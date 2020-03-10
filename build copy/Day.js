import React, { useMemo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
var Day = function (_a) {
    var day = _a.day, locale = _a.locale, onPress = _a.onPress, isHoliday = _a.isHoliday, isToday = _a.isToday, containerStyle = _a.containerStyle, style = _a.style;
    var date = day.date, type = day.type;
    var dayTextColor = (style === null || style === void 0 ? void 0 : style.dayTextColor) || '#1d1c1d';
    var holidayColor = (style === null || style === void 0 ? void 0 : style.holidayColor) || '#f26522';
    var todayColor = (style === null || style === void 0 ? void 0 : style.todayColor) || '#1692e4';
    var selectedDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedDayTextColor) || '#fff';
    var selectedDayBackgroundColor = (style === null || style === void 0 ? void 0 : style.selectedDayBackgroundColor) || '#83bc44';
    var selectedBetweenDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayTextColor) || '#1d1c1d';
    var selectedBetweenDayBackgroundTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayBackgroundTextColor) || '#F2F2F2';
    var getTextColor = useCallback(function () {
        if (type === 'start' || type === 'end' || type === 'single')
            return selectedDayTextColor;
        if (type === 'between')
            return selectedBetweenDayTextColor;
        if (isToday)
            return todayColor;
        if (isHoliday)
            return holidayColor;
        return dayTextColor;
    }, [type, dayTextColor, holidayColor, todayColor, selectedDayTextColor]);
    var mark = useMemo(function () { return (<>
        {type === 'end' || type === 'between' ? (<View style={{
        left: 0,
        width: 30,
        height: 30,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        position: 'absolute',
        top: -5,
    }}/>) : null}
        {type === 'start' || type === 'between' ? (<View style={{
        right: 0,
        width: 30,
        height: 30,
        backgroundColor: selectedBetweenDayBackgroundTextColor,
        position: 'absolute',
        top: -5,
    }}/>) : null}
        {type === 'start' || type === 'end' || type === 'single' ? (<View style={{
        width: 30,
        height: 30,
        backgroundColor: selectedDayBackgroundColor,
        borderRadius: 15,
        position: 'absolute',
        alignSelf: 'center',
        top: -5,
    }}/>) : null}
      </>); }, [type, selectedDayBackgroundColor, selectedDayBackgroundColor]);
    return useMemo(function () { return (<TouchableOpacity activeOpacity={1} disabled={!date} style={[styles.dayContainer, containerStyle, style === null || style === void 0 ? void 0 : style.dayContainer]} onPress={function () { return onPress(date); }}>
        {mark}
        {date ? (<Text style={[
        styles.day,
        {
            color: getTextColor(),
        },
        style === null || style === void 0 ? void 0 : style.day,
    ]}>
            {moment(date).date()}
          </Text>) : null}
        {isToday ? (<Text style={[styles.today, { color: todayColor }]}>
            {locale.today}
          </Text>) : null}
      </TouchableOpacity>); }, [locale.today, mark, getTextColor, onPress]);
};
var styles = StyleSheet.create({
    dayContainer: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        position: 'relative',
    },
    day: {
        fontSize: 15,
    },
    today: {
        fontSize: 12,
        marginTop: 7,
    },
});
export default Day;
//# sourceMappingURL=Day.js.map