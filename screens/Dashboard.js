import React, {useState} from 'react';
import { View,ScrollView, Text, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import StatsCard from '../components/StatsCard';
import Sleep from '../assets/sleep.svg'
import Water from '../assets/water.svg'
import Steps from '../assets/steps.svg'
import Calories from '../assets/calories.svg'
import Training from '../assets/training.svg'
import Heart from '../assets/heartorange.svg'
import HeartGraph from '../assets/heartGraph.svg'
import WaterGraph from '../assets/waterGraph.svg'

export default Dashboard = () => {
    const [active, setactive] = useState("Today");
  return <View style={{marginTop:60}}>
      <Header name='Dashboard' Bell={true} Search={false} Menu={true} arrow={false} leftBar={true}/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"baseline", marginTop:20, height:40}}>
            <TouchableOpacity onPress={() => setactive("Today")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Today"?25: 20, marginHorizontal:35, fontWeight:active == "Today"?"bold": "500"}}>Today</Text>
            {active == "Today"? <Ionicon name="ellipse" size={10} color="#FF7657"/>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setactive("Week")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Week"?25: 20, marginHorizontal:35, fontWeight:active == "Week"?"bold": "500"}}>Week</Text>
            {active == "Week"? <Ionicon name="ellipse" size={10} color="#FF7657"/>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactive("Month")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "Month"?25: 20, marginHorizontal:35, fontWeight:active == "Month"?"bold": "500"}}>Month</Text>
            {active == "Month"? <Ionicon name="ellipse" size={10} color="#FF7657"/>: <View></View>}
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactive("3 Month")}>
                <View style={{ alignItems:"center"}}>
            <Text style={{fontSize:active == "3 Month"?25: 20, marginHorizontal:35, fontWeight:active == "3 Month"?"bold": "500"}}>3 Month</Text>
            {active == "3 Month"? <Ionicon name="ellipse" size={10} color="#FF7657"/>: <View></View>}
            </View>
            </TouchableOpacity>
        </ScrollView>
        <ScrollView contentContainerStyle={{display:"flex", flexDirection:"row", flexWrap:"wrap", marginTop:20, backgroundColor:"#F2F2F4"}}>
            <StatsCard heading={"Heart"} icon={<Heart width={40} height={35}/>} stats={<HeartGraph width={130} height={135} />} unit={"bpm"} number={125}/>
            <StatsCard heading={"Steps"} icon={<Steps width={40} height={35}/>} unit={"steps"} number={3215}/>
            <StatsCard heading={"Water"} icon={<Water width={40} height={35}/>} stats={<WaterGraph width={130} height={135}/>} unit={"cups"} number={6}/>
            <StatsCard heading={"Sleep"} icon={<Sleep width={40} height={35}/>} unit={"Hours"} number={"8:30"}/>
            <StatsCard heading={"Training"} icon={<Training width={40} height={35}/>} unit={"Hours"} number={"1:30"}/>
            <StatsCard heading={"Calories"} icon={<Calories width={40} height={35}/>} unit={"kcal"} number={851}/>
        
        </ScrollView>
  </View>;
};
