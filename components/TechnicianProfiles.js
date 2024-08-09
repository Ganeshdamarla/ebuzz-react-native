import { StyleSheet, Text, View,Image, TouchableOpacity,} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons/';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const Technicianprofile = ( {route} ) => {
  const {name,work,location,services,repair,image} = route.params;
  const navigation=useNavigation();
  return (
      <LinearGradient
            colors={['#85cb33', '#adb5bd']}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}} style={styles.container1}>
        <View style={styles.header}>
            <Feather name="arrow-left" color="black" size={35} onPress={()=>navigation.navigate("TechnicianList")}/>
        </View>
        <View style={styles.image_circle}>
        <Image style={styles.image1} source = {image}/>
        </View>

        <View style={styles.paul}>
          <Text style={{fontSize:30, color:'white',fontWeight:'700'}}> {name} </Text>
          <Text style={{fontSize:20,color:'white',}}>{work}</Text>

          <View style={styles.location}>
            <Icon name="location" size={30} color="white"/>
            <Text style={{fontSize:21,}}> {location} </Text>
          </View>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:'3%',}}></View>
        <View style={styles.bio}>
          <Text style={{fontSize:21,color:'white',}}>{services}</Text>
          <Text style={{fontSize:15,fontWeight:'300'}}><EntypoIcons style={styles.icon3} name="star" size={23} color="gold"/>   4.83 rating(21k reviews)</Text>
          <Text style={{fontSize:15,fontWeight:'700'}}>Next at $499/- only  . 60min</Text>
          <Text><AntDesignIcons style={styles.icon3} name="tag" size={20} color="gold"/>   $100 off on second order</Text>
          <Text>.    Advanced Foam-jet technology </Text>
          <Text>.    Deep Jet cleaning of outdoor unit </Text>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}}></View>

        <View style={styles.bio}>
          <Text style={{fontSize:21,color:'white',}}>{repair}</Text>
          <Text style={{fontSize:15,fontWeight:'300'}}><EntypoIcons style={styles.icon3} name="star" size={23} color="gold"/>   4.92 rating(24k reviews)</Text>
          <Text style={{fontSize:15,fontWeight:'700'}}> $999/- only  . 120min</Text>
          <Text><AntDesignIcons style={styles.icon3} name="tag" size={20} color="gold"/>   10% off on second order</Text>
          <Text>.    Prevent frequent gas leakages through a unique anti-rust spray </Text>
          <Text>.    Applicable on both spilt and window AC's </Text>
        </View>

            <View style={styles.actextView}>
              <TouchableOpacity onPress={()=> navigation.navigate('SlotBooking')}>
              <Text style={styles.actext}>Booking</Text>
              </TouchableOpacity>
            </View>
        </LinearGradient>
  )
}

export default Technicianprofile

const styles = StyleSheet.create({

  container1:{
    flex:1
  },
  image1:{
    width:wp(48),
    height:hp(20.8),
    marginHorizontal:'25%',
    alignSelf:'center',
  },
  location:{
    flexDirection:'row',
  },
  paul:{
    alignItems:'center',
  },
  bio:{
    marginHorizontal:'15%',
    rowGap:4,
  },
  actext:{
    color:'white',
    backgroundColor:'#34a0a4',
    height:hp(6),
    width:wp(40),
    fontSize:19,
    paddingVertical:'2%',
    marginHorizontal:'8%',
    textAlign:'center',
    borderRadius:8,
    marginHorizontal:'30%',
    fontWeight:"bold"
  },
  tools:{
    flexDirection:'row',
    gap:30,
  },
  image_circle:{
    backgroundColor:'white',
    width:'45%',
    height:'21%',
    alignSelf:'center',
    borderRadius:75,
    },
    actextView:{
      paddingBottom:20
    },
    header:{
      width:"80%",
      alignItems:"flex-start",
      justifyContent:"center",
      paddingLeft:20,
      paddingTop:"7%"
  },
})