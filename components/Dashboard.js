import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'
import auth from '../FireBase/FireBaseAuth';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {
    const navigation=useNavigation();

    const logout=()=>{
        signOut(auth).then(()=>navigation.navigate("Login"))
    }
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>DashBoardScreen</Text>
      <Button title='LOGOUT' onPress={logout}/>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    textstyle:{
        fontSize:30
    }
})