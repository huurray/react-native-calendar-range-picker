"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var moment = require("moment");
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    function Day(props) {
        return _super.call(this, props) || this;
    }
    Day.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.day.type === this.props.day.type)
            return false;
        return true;
    };
    Day.prototype.render = function () {
        var _a = this.props, _b = _a.day, date = _b.date, type = _b.type, isHoliday = _b.isHoliday, isToday = _b.isToday, locale = _a.locale, style = _a.style;
        var dayTextColor = (style === null || style === void 0 ? void 0 : style.dayTextColor) || "#1d1c1d";
        var holidayColor = (style === null || style === void 0 ? void 0 : style.holidayColor) || "#f26522";
        var todayColor = (style === null || style === void 0 ? void 0 : style.todayColor) || "#1692e4";
        var selectedDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedDayTextColor) || "#fff";
        var selectedDayBackgroundColor = (style === null || style === void 0 ? void 0 : style.selectedDayBackgroundColor) || "#83bc44";
        var selectedBetweenDayTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayTextColor) || "#1d1c1d";
        var selectedBetweenDayBackgroundTextColor = (style === null || style === void 0 ? void 0 : style.selectedBetweenDayBackgroundTextColor) || "#F2F2F2";
        var markStyle = {
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center"
        };
        var betweenStyle = {
            width: "50%",
            height: 30,
            position: "absolute",
            backgroundColor: selectedBetweenDayBackgroundTextColor
        };
        var dayStyle = {
            color: isHoliday ? holidayColor : isToday ? todayColor : dayTextColor
        };
        switch (type) {
            case "single":
                markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
                dayStyle = { color: selectedDayTextColor };
                break;
            case "start":
                markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
                dayStyle = { color: selectedDayTextColor };
                break;
            case "end":
                markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedDayBackgroundColor, borderRadius: 15 });
                dayStyle = { color: selectedDayTextColor };
                break;
            case "between":
                markStyle = __assign(__assign({}, markStyle), { backgroundColor: selectedBetweenDayBackgroundTextColor, width: "101%" });
                dayStyle = {
                    color: isHoliday
                        ? holidayColor
                        : isToday
                            ? todayColor
                            : selectedBetweenDayTextColor
                };
                break;
            default:
                break;
        }
        return (<>
        {type === "end" ? <react_native_1.View style={[betweenStyle, { left: 0 }]}/> : null}
        {type === "start" ? (<react_native_1.View style={[betweenStyle, { right: 0 }]}/>) : null}
        {date ? (<react_native_1.View style={markStyle}>
            <react_native_1.Text style={[{ fontSize: 15 }, dayStyle, style === null || style === void 0 ? void 0 : style.dayText]}>
              {moment(date).date()}
            </react_native_1.Text>
          </react_native_1.View>) : null}
        {isToday ? (<react_native_1.Text style={[{ fontSize: 12 }, { color: todayColor }]}>
            {locale.today}
          </react_native_1.Text>) : null}
      </>);
    };
    return Day;
}(React.Component));
exports.default = Day;
