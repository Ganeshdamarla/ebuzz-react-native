import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import DrawerNavigation from './components/DrawerNavigation';
import SlotBooking from './components/SlotBooking';
import UserProfile from './components/UserProfile';
import TechnicianList from './components/TechniciansList'
import Technicianprofile from './components/TechnicianProfiles';
import ElectronicProductsList from './components/ElectronicProductsList';
import Animation from './components/Animation';
const stack=createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
        <stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
          <stack.Screen name='HomeScreen' component={HomeScreen}/>
          <stack.Screen name='SignUp' component={SignUp}/>
          <stack.Screen name='Login' component={Login}/>
          <stack.Screen name='ForgetPassword' component={ForgetPassword}/>
          <stack.Screen name='DrawerNavigation' component={DrawerNavigation}/>
          <stack.Screen name='ElectronicProductsList' component={ElectronicProductsList}/>
          <stack.Screen name='UserProfile' component={UserProfile}/>
          <stack.Screen name='TechnicianList' component={TechnicianList}/>
          <stack.Screen name='Technicianprofile' component={Technicianprofile}/>
          <stack.Screen name='SlotBooking' component={SlotBooking}/>
          <stack.Screen name='Payment' component={Payment}/>
          <stack.Screen name='PaymentSuccess' component={PaymentSuccess}/>
          <stack.Screen name='Animation' component={Animation}/>
        </stack.Navigator>
     </NavigationContainer>
  );
}
