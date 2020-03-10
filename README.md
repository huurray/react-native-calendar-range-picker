# react-native-calendar-range-picker

A small, fast and efficient React Native calendar picker.

![demo-play](https://user-images.githubusercontent.com/41982439/76284404-8dd58b00-62e0-11ea-94e6-8d440d3a0571.gif)

## Install

```sh
$ npm install react-native-calendar-range-picker
```

## Usage

### Select date range

```jsx
import {Calendar} from 'react-native-calendar-range-picker';

<Calendar
  startDate="2020-05-05"
  endDate="2020-05-12"
  onChange={({startDate, endDate}) => console.log({startDate, endDate})}
/>;
```

### Select single date

```jsx
<Calendar
  startDate="2020-05-05"
  singleSelectMode
  onChange={date => console.log(date)}
/>
```

## Props

Common props you may want to specify include:

- `onChange` - required. Handler which gets executed on day press including date data(start date, end date or single date).
- `yearRange` - amount of months allowed to scroll to the past and the future.
- `locale` - can be localized by adding custom locales to locale object.
- `startDate` - Initially visible start date.
- `endDate` - Initially visible end date.
- `singleSelectMode` - only select single date.
- `style` - customize style.

### Locale

```jsx
const LOCALE_EN = {
    monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
  }

<Calendar
  locale={LOCALE_EN}
  ...
/>;
```

### Customize Style

```jsx


<Calendar
  style={{
    container: {},
    monthContainer: {},
    monthName: {},
    dayName: {},
    dayContainer: {},
    day: {},
    dayTextColor: '#Hex',
    holidayColor: '#Hex',
    todayColor: '#Hex',
    selectedDayTextColor: '#Hex',
    selectedDayBackgroundColor: '#Hex',
    selectedBetweenDayTextColor: '#Hex',
    selectedBetweenDayBackgroundTextColor: '#Hex',
  }}
  ...
/>;
```
