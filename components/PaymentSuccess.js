import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Animated ,Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccess = () => {
  const [fadeIn] = useState(new Animated.Value(0));
const navigation=useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000, 
        useNativeDriver: true,
      }).start();
    }, 1000); 
    return () => clearTimeout(timer);
  }, [fadeIn]);

  

  return (
    <View style={styles.containerMain}>
        <View style={styles.container}>
            <Animated.Image
        source={{ uri: "https://png.pngtree.com/png-clipart/20230105/original/pngtree-green-check-mark-png-image_8873320.png" }}
        style={[styles.icon2, { opacity: fadeIn }]} // Apply opacity style based on animation value
      />
      <Text style={styles.textPayment}>Payment Success</Text>
        </View>
      <TouchableOpacity style={styles.PaymentSuccessDone} onPress={()=>navigation.navigate("DrawerNavigation")}>
        <Text style={styles.PaymentSuccessDoneText}>DONE</Text>
      </TouchableOpacity>
      </View>
  );
};
export default PaymentSuccess;

const styles = StyleSheet.create({
    containerMain:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"lightgrey"
    },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon2: {
    height: 70,
    width: 90,
    resizeMode: 'contain'
  },
  PaymentSuccessDone:{
    backgroundColor:"rgb(138,186,38)",
    width:"30%",
    paddingVertical:10,
    borderRadius:10,
    margin:"5%"
  },
  PaymentSuccessDoneText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  },
  textPayment:{
    fontWeight:"bold",
    fontSize:20
  }
});
