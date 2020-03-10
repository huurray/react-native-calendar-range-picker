# react-native-calendar-range-picker

A small, fast and efficient React Native calendar picker.

![demo-play](https://user-images.githubusercontent.com/41982439/76284404-8dd58b00-62e0-11ea-94e6-8d440d3a0571.gif)

### Install

```sh
$ npm i react-native-range-datepicker --save
```

### How to use

```jsx
import {Calendar} from 'react-native-calendar-range-picker';

<Calendar
  startDate="2020-05-05"
  endDate="2020-05-12"
  onChange={({startDate, endDate}) => console.log({startDate, endDate})}
/>;
```
