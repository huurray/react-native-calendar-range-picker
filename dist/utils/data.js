"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
function getMonths(pastYearRange, futureYearRange) {
    var currentYear = moment().year();
    var startYear = currentYear - pastYearRange;
    var endYear = currentYear + futureYearRange;
    var months = [];
    for (var i = 0; i < endYear - startYear; i++) {
        var year = startYear + i;
        for (var i_1 = 0; i_1 < 12; i_1++) {
            var id = "";
            if (i_1 < 9) {
                id = year + "-0" + (i_1 + 1);
            }
            else {
                id = year + "-" + (i_1 + 1);
            }
            months.push({
                id: id,
                year: year,
                month: i_1 + 1
            });
        }
    }
    return months;
}
exports.getMonths = getMonths;
function getWeeks(month, startDate, endDate) {
    var currentMonth = moment(month).month();
    var currentDate = moment(month).startOf("month");
    var week = [];
    var weeks = [];
    var dayObj = {};
    do {
        week = [];
        for (var i = 0; i < 7; i++) {
            dayObj = {
                type: null,
                date: null
            };
            var currentDateString = currentDate.format("YYYY-MM-DD");
            if (i == currentDate.days() && currentDate.month() == currentMonth) {
                if (startDate && startDate === currentDateString) {
                    if (!endDate) {
                        dayObj.type = "single";
                    }
                    else {
                        dayObj.type = "start";
                    }
                }
                if (endDate && endDate == currentDateString) {
                    if (startDate === endDate) {
                        dayObj.type = "single";
                    }
                    else {
                        dayObj.type = "end";
                    }
                }
                if (startDate &&
                    startDate < currentDateString &&
                    endDate &&
                    endDate > currentDateString) {
                    dayObj.type = "between";
                }
                var date = currentDate.clone().format("YYYY-MM-DD");
                dayObj.date = date;
                week.push(dayObj);
                currentDate.add(1, "day");
            }
            else {
                if (startDate &&
                    endDate &&
                    startDate < startDate &&
                    endDate >= startDate) {
                    dayObj.type = "between";
                }
                week.push(dayObj);
            }
        }
        weeks.push(week);
    } while (currentDate.month() == currentMonth);
    return weeks;
}
exports.getWeeks = getWeeks;
