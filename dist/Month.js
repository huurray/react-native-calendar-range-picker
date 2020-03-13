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
var PADDING_HORIZONTAL = 10;
var SCREEN_WIDTH = react_native_1.Dimensions.get("window").width;
var Month = /** @class */ (function (_super) {
    __extends(Month, _super);
    function Month(props) {
        return _super.call(this, props) || this;
    }
    Month.prototype.shouldComponentUpdate = function (nextProps) {
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
    Month.prototype.renderDayNames = function () {
        var _a;
        var result = [];
        var dayNames = this.props.locale.dayNames;
        for (var i = 0; i < dayNames.length; i++) {
            result.push(<react_native_1.View key={i} style={styles.dayNameContainer}>
          <react_native_1.Text style={[styles.dayName, (_a = this.props.style) === null || _a === void 0 ? void 0 : _a.dayNameText]}>
            {dayNames[i]}
          </react_native_1.Text>
        </react_native_1.View>);
        }
        return result;
    };
    Month.prototype.renderDays = function () {
        var _this = this;
        var result = [];
        var days = data_1.getDays(this.props.item.id, this.props.startDate, this.props.endDate);
        var is6Weeks = days.length > 7 * 5;
        var _loop_1 = function (i) {
            var day = days[i];
            var dayComponent = (<react_native_1.View style={{ width: (SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 7 }} key={i}/>);
            if (day.date) {
                dayComponent = (<react_native_1.TouchableOpacity style={{
                    width: (SCREEN_WIDTH - PADDING_HORIZONTAL * 2) / 7,
                    height: is6Weeks ? 45 : 50,
                    alignItems: "center"
                }} onPress={function () { return _this.props.onPress(day.date || ""); }} activeOpacity={1} key={day.date || i}>
            <Day_1.default day={day} locale={this_1.props.locale} style={this_1.props.style}/>
          </react_native_1.TouchableOpacity>);
            }
            result.push(dayComponent);
        };
        var this_1 = this;
        for (var i = 0; i < days.length; i++) {
            _loop_1(i);
        }
        return result;
    };
    Month.prototype.render = function () {
        var _a = this.props, _b = _a.item, year = _b.year, month = _b.month, locale = _a.locale, style = _a.style;
        return (<react_native_1.View style={[styles.monthContainer, style === null || style === void 0 ? void 0 : style.monthContainer]}>
        <react_native_1.View style={styles.monthNameContainer}>
          <react_native_1.Text style={[styles.monthName, style === null || style === void 0 ? void 0 : style.monthNameText]}>
            {year}
            {locale.year} {locale.monthNames[month - 1]}
          </react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.dayNamesContainer}>{this.renderDayNames()}</react_native_1.View>
        <react_native_1.View style={styles.dayContainer}>{this.renderDays()}</react_native_1.View>
      </react_native_1.View>);
    };
    return Month;
}(React.Component));
exports.default = Month;
var styles = react_native_1.StyleSheet.create({
    monthContainer: {
        paddingTop: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingBottom: 30,
        backgroundColor: "#fff"
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
        height: 40,
        marginTop: 10
    },
    dayName: {
        fontSize: 15,
        color: "#bababe"
    },
    dayContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
