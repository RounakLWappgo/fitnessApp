import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CreateAccount } from './screens/CreateAccount';
import StartupScreen from './screens/startupScreen';
import Login from './screens/Login';
import WelcomeScreen from './screens/WelcomeScreen';
import TrainingScreen from './screens/TrainingScreen';
import Carousel from './components/Carousel';
import AllCourses from './screens/AllCourses';
import SearchScreen from './screens/SearchScreen';
import Dashboard from './screens/Dashboard';

export default function App() {
  return ( <Dashboard/>
    // <SearchScreen/>
  // <AllCourses/>
  // <TrainingScreen/>
    // <View style={styles.container}>
    //   {/* <StartupScreen /> */}
    //   {/* <CreateAccount/> */}
    //   {/* <Login/> */}
    //   {/* <WelcomeScreen/> */}
    //   <TrainingScreen/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
