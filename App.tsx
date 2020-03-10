import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Calendar from './Calendar';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Calendar
          onChange={props => {
            console.log(props);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
