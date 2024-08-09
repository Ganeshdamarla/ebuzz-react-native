import { createDrawerNavigator } from "@react-navigation/drawer";
import UserProfile from "./UserProfile";
import Support from "./Support";
import Settings from "./Settings";
import ElectronicProductsList from "./ElectronicProductsList";
const Drawer = createDrawerNavigator();
const DrawerNavigation = ({route}) => {
  
  return (
    <Drawer.Navigator initialRouteName="UserProfile">  
    <Drawer.Screen name="ElectronicProductsList" component={ElectronicProductsList}/>
         <Drawer.Screen name="UserProfile">
                {(props) => <UserProfile {...props} route={route}/>}
            </Drawer.Screen>
        <Drawer.Screen name="Support" component={Support}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        
    </Drawer.Navigator> 
  )
}

export default DrawerNavigation

