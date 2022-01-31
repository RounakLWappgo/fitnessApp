import React from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/Carousel'
import Header from '../components/Header';
import List from '../components/List';

export default WelcomeScreen = () => {
  return <View>
      <Header Greet='Hey! Welcome' name='John!' Bell={false} Search={true} Menu={true} arrow={false} leftBar={false}/>
      <Carousel />
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:20, marginBottom:20}}>Popular Training</Text>
      <List/>
  </View>;
};
