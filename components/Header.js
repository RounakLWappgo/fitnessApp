import React from 'react';
import { Text, View } from 'react-native';
import Search from '../assets/search.svg'
import Menu from '../assets/menu.svg'
import Bell from '../assets/bell.svg'
import Arrow from '../assets/leftarrow.svg'
export default Header = (props) => {
  return <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
    {props.leftBar?<View style={{borderLeftWidth:4, height:30}}></View>:<View></View>}
          {props.arrow?<View style={{height:20, width:25, marginLeft:20}}><Arrow/></View> :<View></View> }
      {/* <View style={{height:20, width:25}}><Arrow/></View> */}

      <View style={{marginLeft:30}}>
          {props.Greet?<Text style={{color:"#8C9195", fontSize:30}}>{props.Greet}</Text>:<View></View>}
          {props.name?<Text style={{fontSize:30, fontWeight:"bold"}}>{props.name}</Text>:<View></View>}
          </View>
      </View>
      
      <View style={{flexDirection:"row", marginHorizontal:10}}> 
      {props.Search? <View style={{height:20, width:25, marginHorizontal:10}}><Search/></View> :<View></View>}
      {props.Bell? <View style={{height:20, width:25, marginHorizontal:10}}><Bell/></View> :<View></View>}
      {props.Menu? <View style={{height:20, width:25, marginHorizontal:10}}><Menu/></View> :<View></View>}

      </View>

  </View>;
};
