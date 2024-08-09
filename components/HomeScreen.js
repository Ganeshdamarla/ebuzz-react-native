import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
          {<Image style={styles.imagebuzz} source = {require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_9d9a0b28-d7cf-4406-9675-43722bedd50b-47cf3214-beff-4c5c-ba57-2fc036891c88.png')}/>}
          <Text style={styles.ebuzz}>
            E-BuZZ
          </Text>
        
        
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignUp')}>
         <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
         <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgb(138,186,38)',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  ebuzz:{
    fontSize:50,
    fontFamily:'Colonna MT',
    top:'53%',
    color:'black',
    fontFamily:'Algerian',
    position:'absolute',
    fontWeight:'700',
    
  },
  imagebuzz:{
    height:'45%',
    width:'100%',
  },
  signupButton: {
    textAlign: 'center',
    fontSize: 25,
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 15,
    // width:'48%',
    paddingHorizontal:'9%',
    marginTop:'5%',
  },
  loginbutton:{
      textAlign: 'center',
      fontSize: 25,
      borderWidth: 3,
      backgroundColor: 'white',
      borderRadius: 15,
      // width:'48%',
      // height:'23%',
      paddingHorizontal:'14%',
      marginTop:'5%',
  },
  button:{
    width:"50%",
    paddingVertical:"3%",
    borderRadius:5,
    backgroundColor:'#fff',
    marginTop:"4%",
    alignSelf:"center"
},
buttonText:{
    color:"black",
    fontWeight:"bold",
    textAlign:"center",
    fontWeight:"bold"
},
})