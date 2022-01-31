import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

export default AllCources = () => {
  return <View style={{marginTop:60,}}>
      <Header  name='All Courses' Bell={false} Search={true} Menu={true} arrow={true} leftBar={false}/>
      <Card/>
  </View>;
};
