import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ElectricProductsList= () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>

        <ScrollView>
        <View style={styles.product1}>
            <TouchableOpacity style={styles.acbg} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac} source={{uri:"https://pngimg.com/uploads/air_conditioner/air_conditioner_PNG22.png"}}></Image>
                <View>
                    <Text style={styles.actext}>Air Conditioner</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acbg1} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac1} source={{uri:"https://www.pngmart.com/files/6/Two-Door-Refrigerator-Transparent-Images-PNG.png"}}></Image>
                <View>
                    <Text style={styles.actext1}>Fridges</Text>
                </View>
            </TouchableOpacity>
        </View>
            
        <View style={styles.product2}>
            <TouchableOpacity style={styles.acbg2} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac2} source={{uri:"https://freepngimg.com/thumb/technology/49976-4-dell-laptop-image-free-transparent-image-hq.png"}}></Image>
                <View>
                    <Text style={styles.actext2}>Laptops</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acbg3} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac3} source={{uri:"https://www.pngarts.com/files/8/Cooler-PNG-Image-Transparent.png"}}></Image>
                <View>
                    <Text style={styles.actext3}>Coolers</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.product3}>
            <TouchableOpacity style={styles.acbg4} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac4} source={{uri:"https://th.bing.com/th/id/R.a752fed7fc583d000502f865526dbcd9?rik=72Ri96oRWjAUdw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fled-tv-png-tv-png-1512.png&ehk=95eNQW3YNHhn1VcQ%2bHqrDAE%2bChCnYvZBAroZJBf8ZN0%3d&risl=&pid=ImgRaw&r=0"}}></Image>
                <View>
                    <Text style={styles.actext4}>T.V</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acbg5} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac5} source={{uri:"https://www.freepngimg.com/thumb/fan/8-2-fan-png.png"}}></Image>
                <View>
                    <Text style={styles.actext5}>Fans</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.product4}>
            <TouchableOpacity style={styles.acbg6} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac6} source={{uri:"https://pngimg.com/uploads/washing_machine/washing_machine_PNG15589.png"}}></Image>
                <View>
                    <Text style={styles.actext6}>Washing Machine</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acbg7} onPress={() => navigation.navigate("TechnicianList")}>
                <Image style={styles.ac7} source={{uri:"https://www.pngall.com/wp-content/uploads/10/Geyser-Water-Heater-PNG-Images.png"}}></Image>
                <View>
                    <Text style={styles.actext7}>Geyser Heater</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>

    </View> // container
  )
}

export default ElectricProductsList

const styles = StyleSheet.create({

    container:{
        // marginTop:'10%',
        paddingHorizontal:'3%',
        // backgroundColor:'black',
        paddingVertical:'10%',
      },
      ac:{
        width:wp(45),
        height:hp(16),
      },
      acbg:{
        backgroundColor:'#7176EC',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext:{
        color:'white',
        backgroundColor:'#5153B4',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },
      product1:{
        flexDirection:'row',
        gap:7,
      },

      ac1:{
        width:wp(45),
        height:hp(16),
        marginTop:'3%',
      },
      acbg1:{
        backgroundColor:'#D14156',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext1:{
        color:'white',
        backgroundColor:'#AF394E',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },
      //next 2row

      ac2:{
        width:wp(45),
        height:hp(16),
      },
      acbg2:{
        backgroundColor:'#4CA4E4',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext2:{
        color:'white',
        backgroundColor:'#3777A7',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },
      product2:{
        flexDirection:'row',
        gap:7,
        marginTop:'5%',
      },

      ac3:{
        width:wp(45),
        height:hp(16),
        marginTop:'3%',
      },
      acbg3:{
        backgroundColor:'#42916C',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext3:{
        color:'white',
        backgroundColor:'#3C8362',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },

      // 3rd row

      product3:{
        flexDirection:'row',
        gap:7,
        marginTop:'5%',
      },

      ac4:{
        width:wp(45),
        height:hp(16),
        marginTop:'3%',
      },
      acbg4:{
        backgroundColor:'#C6413A',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext4:{
        color:'white',
        backgroundColor:'#A93E39',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },

      ac5:{
        width:wp(45),
        height:hp(16),
        marginTop:'3%',
      },
      acbg5:{
        backgroundColor:'#CD622B',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext5:{
        color:'white',
        backgroundColor:'#E17533',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },
      // 4th row

      product4:{
        flexDirection:'row',
        gap:7,
        marginTop:'5%',
      },

      ac6:{
        width:wp(45),
        height:hp(16),
        marginTop:'8%',
      },
      acbg6:{
        backgroundColor:'#273576',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
      },
      actext6:{
        color:'white',
        backgroundColor:'#6A7BA9',
        height:hp(5),
        width:wp(40),
        fontSize:15,
        paddingVertical:'5%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },

      ac7:{
        width:wp(45),
        height:hp(16),
        marginTop:'7%',
      },
      acbg7:{
        backgroundColor:'#882345',
        height:hp(25),
        width:wp(45),
        borderRadius:10,
         marginBottom:'10%',
      },
      actext7:{
        color:'white',
        backgroundColor:'#8C0B42',
        height:hp(6),
        width:wp(40),
        fontSize:19,
        paddingVertical:'3%',
        marginHorizontal:'5%',
        marginVertical:'5%',
        textAlign:'center',
        borderRadius:10,
      },
})