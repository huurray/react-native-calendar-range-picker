# :point_up_2: react-native-calendar-range-picker

![platforms](https://img.shields.io/badge/platforms-Android%20|%20iOS-brightgreen.svg)
[![npm](https://img.shields.io/npm/v/react-native-calendar-range-picker.svg)](https://www.npmjs.com/package/react-native-calendar-range-picker)
[![npm](https://img.shields.io/npm/dt/react-native-calendar-range-picker.svg)](https://www.npmjs.com/package/react-native-calendar-range-picker)

A Simple react native calendar picker using Hooks.

![demo-play](https://user-images.githubusercontent.com/41982439/76744452-9da90f80-67b7-11ea-9aca-1590ebbf3d11.gif)

## Install

```
yarn add react-native-calendar-range-picker
```

or

```
npm install react-native-calendar-range-picker --save
```

## Usage

### Select date range

```jsx
import Calendar from "react-native-calendar-range-picker";

<View style={{ flex: 1 }}>
  <Calendar
    startDate="2024-03-05"
    endDate="2024-03-12"
    onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
  />
</View>;
```

### Select single date

```jsx
<View style={{ height: 600 }}>
  <Calendar
    startDate="2024-03-05"
    singleSelectMode
    onChange={(date) => console.log(date)}
  />
</View>
```

## Props

Common props you may want to specify include:

| Properties            | PropType             | Description                                                                                             |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| `onChange`            | `func`               | (**Required**) Handler which gets executed on day press including date data.(start, end or single date) |
| `singleSelectMode`    | `boolean`            | Only select single date. (default = false)                                                              |
| `pastYearRange`       | `number`             | Amount of months allowed to scroll to the past. (default = 1)                                           |
| `futureYearRange`     | `number`             | Amount of months allowed to scroll to the future. (default = 2)                                         |
| `locale`              | `object`             | Can be localized by adding custom locales to locale object.                                             |
| `startDate`           | `string(YYYY-MM-DD)` | Initially visible start date.                                                                           |
| `endDate`             | `string(YYYY-MM-DD)` | Initially visible end date.                                                                             |
| `initialNumToRender`  | `number`             | FlatList initialNumToRender prop.(to protect slow initial render)(default = 7)                          |
| `flatListProps`       | `FlatList Props`     | FlatList all props.                                                                                     |
| `isMonthFirst`        | `boolean`            | Switch year and month order. (2024 April -> April 2024)                                                 |
| `disabledBeforeToday` | `boolean`            | Disable select day before today.                                                                        |
| `disabledAfterToday`  | `boolean`            | Disable select day after today.                                                                         |
| `style`               | `object`             | Customize style.                                                                                        |

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
    year: '', // letter behind year number -> 2024{year}
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
    monthOverlayContainer: {},
    weekContainer:{},
    monthNameText: {},
    dayNameText: {},
    dayText: {},
    dayTextColor: '#f7f7f7',
    holidayColor: 'rgba(0,0,0,0.5)',
    todayColor: 'blue',
    disabledTextColor: '#Hex',
    selectedDayTextColor: '#Hex',
    selectedDayBackgroundColor: '#Hex',
    selectedBetweenDayTextColor: '#Hex',
    selectedBetweenDayBackgroundTextColor: '#Hex',
  }}
  ...
/>;
```

## License

MIT
