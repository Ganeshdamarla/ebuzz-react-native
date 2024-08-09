import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
const Settings = () => {
    const navigation=useNavigation();
    const[mode,setMode]=useState(true)
    const[modeColor,setModeColor]=useState(true)
  return (
    <View style={[modeColor?styles.dark:styles.container]}>
        <View style={styles.topTab}>
        <View style={styles.topTabs}>
           <TouchableOpacity style={styles.boxes}><Text>Languages</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.boxes}><Text>Themes</Text></TouchableOpacity>
        </View>

        <View style={styles.topTabs}>
        <TouchableOpacity style={styles.box2} onPress={()=>{setMode(!mode); setModeColor(!modeColor)}}>
            {mode?<Feather name="sun" size={20}/>:<Feather name="moon" size={20}/>}
            <Text>Mode</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.boxes}><Text>Privacy Settings</Text></TouchableOpacity>
        </View>
        <View style={styles.bottomTab}>
           <TouchableOpacity style={styles.boxes}><Text>About</Text></TouchableOpacity> 
        </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between"
    },
    logoutQuote:{
        justifyContent:"center",
        flex:1,
        alignItems:"center",
        width:"100%"
    },
    button:{
        backgroundColor:"rgb(138,186,38)",
        width:"50%",
        paddingVertical:"5%",
        borderRadius:10,
        margin:"5%",
        justifyContent:"flex-end"
    },
    text:{
        alignSelf:"center",
        fontWeight:"900",
        color:"white"
    },
    LogoutSloganText:{
        fontSize:35,
        color:'black',
        fontWeight:"bold",
        textAlign:"justify"
    },
    language:{
        backgroundColor:"white",
        elevation:5,
        paddingVertical:10,
        paddingHorizontal:10
    },
    topTabs:{
        flexDirection:"row",
        width:"80%",
        justifyContent:"space-between",
    },
    boxes:{
        backgroundColor:"white",
        elevation:5,
        alignItems:"center",
        justifyContent:"center",
        width:"45%",
        paddingVertical:"4%",
        borderRadius:5
    },
    topTab:{
        gap:50,
        marginVertical:"20%",
    },
    bottomTab:{
        alignItems:"center"
    },
    box2:{
        backgroundColor:"white",
        elevation:5,
        alignItems:"center",
        justifyContent:"center",
        width:"45%",
        paddingVertical:"4%",
        borderRadius:5,
        flexDirection:"row",
        gap:8
    },
    dark:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"space-between"
    },
    
})