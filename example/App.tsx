import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Calendar from './src';

interface Params {
  startDate: string | null;
  endDate: string | null;
}
const App = () => {
  const [startDate, setStartDate]: any = useState(null);
  const [endDate, setEndDate]: any = useState(null);

  function handleSubmit() {
    console.log(startDate, endDate);
  }

  function handleChange({startDate, endDate}: Params) {
    if (startDate && !endDate) {
      setStartDate(startDate);
      setEndDate(null);
      return;
    }
    if (startDate && endDate) {
      setStartDate(startDate);
      setEndDate(endDate);
      return;
    }
    if (endDate) {
      setStartDate({startDate});
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#eee',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity style={{padding: 20}}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {startDate ? <Text>{startDate}</Text> : null}
            {endDate ? <Text> ~{endDate}</Text> : null}
          </View>

          <TouchableOpacity onPress={handleSubmit} style={{padding: 20}}>
            <Text style={{color: 'green'}}>Confirm</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Calendar onChange={handleChange} disabledBeforeToday />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
