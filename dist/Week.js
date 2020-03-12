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
var Week = /** @class */ (function (_super) {
    __extends(Week, _super);
    function Week(props) {
        return _super.call(this, props) || this;
    }
    Week.prototype.shouldComponentUpdate = function (nextProps) {
        if (JSON.stringify(nextProps.week) === JSON.stringify(this.props.week))
            return false;
        return true;
    };
    Week.prototype.renderDayNames = function () {
        var result = [];
        var today = moment().format("YYYY-MM-DD");
        for (var i = 0; i < 7; i++) {
            var targetWeek = this.props.week[i];
            var DayComponent = targetWeek.date ? (<Day_1.default day={targetWeek} key={targetWeek.date} locale={this.props.locale} onPress={this.props.onPress} containerStyle={{ height: this.props.is6Weeks ? 45 : 50 }} isToday={targetWeek.date === today} isHoliday={i === 0 || i === 6} style={this.props.style}/>) : (<react_native_1.View style={{ flex: 1, height: 50 }} key={i}/>);
            result.push(DayComponent);
        }
        return result;
    };
    Week.prototype.render = function () {
        var _a;
        return (<react_native_1.View style={[styles.weekContainer, (_a = this.props.style) === null || _a === void 0 ? void 0 : _a.weekContainer]}>
        {this.renderDayNames()}
      </react_native_1.View>);
    };
    return Week;
}(React.Component));
exports.default = Week;
var styles = react_native_1.StyleSheet.create({
    weekContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});
