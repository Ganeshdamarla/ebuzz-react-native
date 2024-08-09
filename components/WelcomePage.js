import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const WelcomePage = ({route}) => {
    
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.header}>Welcome</Text>
            <Text style={styles.namestyle}>{route.params.parakey.Name}</Text>
            <Text style={styles.namestyle}>{route.params.parakey.Email}</Text>
        </View>
        <View style={styles.container2}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("DrawerNavigation")}>
                    <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgreen"
    },
    container1:{
        // justifyContent:"center"
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        alignSelf:"center",
    },
    namestyle:{
        fontSize:30,
    },
    container2:{
        // justifyContent:"flex-end",
    },
    button:{
        paddingHorizontal:"20%",
        paddingVertical:"3%",
        borderRadius:5,
        backgroundColor:'rgb(138,186,38)',
        margin:"2%",
        alignSelf:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold"
    },
})