import dayjs from 'dayjs';

export interface Day_Type {
  type: 'single' | 'start' | 'end' | 'between' | null;
  date: string | null;
  isToday: boolean;
  isBeforeToday: boolean;
  isAfterToday: boolean;
  isHoliday: boolean;
}

export type Week_Type = Day_Type[];
export interface Month_Type {
  id: string;
  year: number;
  month: number;
}

export function getMonths(pastYearRange: number, futureYearRange: number) {
  const currentYear = dayjs().year();
  const startYear = currentYear - pastYearRange;
  const endYear = currentYear + futureYearRange;

  const months: Month_Type[] = [];
  for (let i = 0; i < endYear - startYear; i++) {
    const year = startYear + i;
    for (let j = 1; j <= 12; j++) {
      let id = '';
      id = `${year}-${j <= 9 ? '0' : ''}${j}`;
      months.push({
        id,
        year,
        month: j,
      });
    }
  }
  return months;
}

export function getWeeks(
  date: string,
  selectedStartDate?: string | null,
  selectedEndDate?: string | null,
) {
  const DATE_FORMAT = 'YYYY-MM-DD';
  const today = dayjs().format(DATE_FORMAT);
  const targetMonth = dayjs(date).month();

  const month: Week_Type[] = [];
  let calcDate = dayjs(date).startOf('month');

  do {
    let week: Week_Type = [];
    for (let i = 0; i < 7; i++) {
      let dayObj: Day_Type = {
        type: null,
        date: null,
        isToday: false,
        isBeforeToday: false,
        isAfterToday: false,
        isHoliday: false,
      };
      const formattedCalcDate = calcDate.format(DATE_FORMAT);
      if (i == calcDate.day() && calcDate.month() == targetMonth) {
        if (selectedStartDate && selectedStartDate === formattedCalcDate) {
          if (!selectedEndDate) {
            dayObj.type = 'single';
          } else {
            dayObj.type = 'start';
          }
        }

        if (selectedEndDate && selectedEndDate == formattedCalcDate) {
          if (selectedStartDate === selectedEndDate) {
            dayObj.type = 'single';
          } else {
            dayObj.type = 'end';
          }
        }
        if (
          selectedStartDate &&
          selectedStartDate < formattedCalcDate &&
          selectedEndDate &&
          selectedEndDate > formattedCalcDate
        ) {
          dayObj.type = 'between';
        }

        const date = calcDate.clone().format(DATE_FORMAT);
        const passedDayFromToday = calcDate.diff(dayjs(), 'day') < 0;
        const futureDayFromToday = calcDate.diff(dayjs(), 'hours') > 0;
        dayObj.date = date;
        if (date === today) {
          dayObj.isToday = true;
        }
        if (passedDayFromToday) {
          dayObj.isBeforeToday = true;
        }
        if (futureDayFromToday) {
          dayObj.isAfterToday = true;
        }
        if (i === 0 || i === 6) {
          dayObj.isHoliday = true;
        }
        week.push(dayObj);
        calcDate = calcDate.add(1, 'day');
      } else {
        if (
          selectedStartDate &&
          selectedEndDate &&
          selectedStartDate < selectedStartDate &&
          selectedEndDate >= selectedStartDate
        ) {
          dayObj.type = 'between';
        }
        week.push(dayObj);
      }
    }
    month.push(week);
  } while (calcDate.month() == targetMonth);

  return month;
}
