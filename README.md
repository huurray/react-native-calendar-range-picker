# react-native-calendar-range-picker

A Simple react native calendar picker.

![demo-play](https://user-images.githubusercontent.com/41982439/76284404-8dd58b00-62e0-11ea-94e6-8d440d3a0571.gif)

## Install

```sh
$ npm install react-native-calendar-range-picker
```

## Usage

### Select date range

```jsx
import Calendar from "react-native-calendar-range-picker";

<Calendar
  startDate="2020-05-05"
  endDate="2020-05-12"
  onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
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

| Properties           | PropType             | Description                                                                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| `onChange`           | `func`               | (**Required**) Handler which gets executed on day press including date data.(start, end or single date) |
| `pastYearRange`      | `number`             | Amount of months allowed to scroll to the past. (default = 0)                                           |
| `futureYearRange`    | `number`             | Amount of months allowed to scroll to the future. (default = 2)                                         |
| `locale`             | `object`             | Can be localized by adding custom locales to locale object.                                             |
| `startDate`          | `string(YYYY-MM-DD)` | Initially visible start date.                                                                           |
| `endDate`            | `string(YYYY-MM-DD)` | Initially visible end date.                                                                             |
| `singleSelectMode`   | `boolean`            | Only select single date. (default = false)                                                              |
| `initialNumToRender` | `number`             | FlatList initialNumToRender props(to protect slow initial render) (default = 5)                         |
| `style`              | `object`             | Customize style.                                                                                        |

### Locale

```jsx
const CUSTOM_LOCALE = {
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
    year: '', // letter behind year number -> 2020{year}
  }

<Calendar
  locale={CUSTOM_LOCALE}
  ...
/>;
```

### Customize Style

```jsx
<Calendar
  style={{
    container: {},
    monthContainer: {},
    monthNameText: {},
    dayNameText: {},
    dayText: {},
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
