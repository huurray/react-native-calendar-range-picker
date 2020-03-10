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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var moment = require("moment");
// components
var Day_1 = require("./Day");
// types
var data_1 = require("./utils/data");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        return _super.call(this, props) || this;
    }
    Calendar.prototype.shouldComponentUpdate = function (nextProps) {
        var newId = nextProps.item.id;
        if (nextProps.startDate &&
            moment(nextProps.startDate).format("YYYY-MM") == newId) {
            return true;
        }
        if (nextProps.endDate &&
            moment(nextProps.endDate).format("YYYY-MM") == newId) {
            return true;
        }
        if (this.props.startDate &&
            moment(this.props.startDate).format("YYYY-MM") == newId) {
            return true;
        }
        if (this.props.endDate &&
            moment(this.props.endDate).format("YYYY-MM") == newId) {
            return true;
        }
        if (nextProps.startDate &&
            nextProps.endDate &&
            moment(nextProps.startDate).format("YYYYMM") <
                moment(newId).format("YYYYMM") &&
            moment(nextProps.endDate).format("YYYYMM") >
                moment(newId).format("YYYYMM")) {
            return true;
        }
        if (this.props.endDate &&
            this.props.startDate &&
            moment(this.props.startDate).format("YYYYMM") <
                moment(newId).format("YYYYMM") &&
            moment(this.props.endDate).format("YYYYMM") >
                moment(newId).format("YYYYMM")) {
            return true;
        }
        return false;
    };
    Calendar.prototype.render = function () {
        var _a = this.props, _b = _a.item, id = _b.id, year = _b.year, month = _b.month, startDate = _a.startDate, endDate = _a.endDate, locale = _a.locale, onPress = _a.onPress, style = _a.style;
        var weeks = data_1.getWeeks(id, startDate, endDate);
        var is6Weeks = weeks.length > 5;
        return (<react_native_1.View style={[styles.container, style === null || style === void 0 ? void 0 : style.monthContainer]}>
        <react_native_1.View style={styles.monthNameContainer}>
          <react_native_1.Text style={[styles.monthName, style === null || style === void 0 ? void 0 : style.monthName]}>
            {year} {locale.monthNames[month - 1]}
          </react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.dayNamesContainer}>
          {locale.dayNames.map(function (day, i) { return (<react_native_1.View key={i} style={styles.dayNameContainer}>
              <react_native_1.Text style={[styles.dayName, style === null || style === void 0 ? void 0 : style.dayName]}>{day}</react_native_1.Text>
            </react_native_1.View>); })}
        </react_native_1.View>
        <react_native_1.View>
          {weeks.map(function (week, i) { return (<react_native_1.View style={styles.dayContainer} key={i}>
              {week.map(function (day, j) { return (<Day_1.default day={day} key={j} locale={locale} onPress={onPress} containerStyle={{ height: is6Weeks ? 45 : 50 }} isToday={day.date === moment().format("YYYY-MM-DD")} isHoliday={j === 0 || j === 6} style={style}/>); })}
            </react_native_1.View>); })}
        </react_native_1.View>
      </react_native_1.View>);
    };
    return Calendar;
}(React.Component));
exports.default = Calendar;
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    monthNameContainer: {
        paddingLeft: 20
    },
    monthName: {
        fontSize: 16
    },
    dayNamesContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    dayNameContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },
    dayName: {
        fontSize: 15,
        color: "#bababe"
    },
    dayContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});
