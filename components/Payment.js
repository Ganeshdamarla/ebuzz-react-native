import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
const Payment = () => {
    const navigation=useNavigation();
    const [upi, setUpi] = useState('');
    const [selectedUPI, setSelectedUPI] = useState(null);
    const [CompanyValue, setCompanyValue] = useState(null);

   


    const companies = [
        { label: "Net Banking", value: 0 },
        { label: "Credit Card", value: 1 },
        { label: "Debit Card", value: 2 },
        { label: "Gift Card", value: 3 },
    ];

    const handleProceedPayment = () => {
        if (upi.length > 1 || selectedUPI || CompanyValue !== null) {
            navigation.navigate("PaymentSuccess");
        } else {
            alert("please select any one of the payment option");
        }
    }

  return (
    <View style={styles.container}>
    <View style={styles.container1}>
        <View style={styles.header}>
            <Feather name="arrow-left" color="black" size={30} onPress={()=>navigation.navigate("SlotBooking")}/>
            <Text style={styles.headerText}>Choose payment mode</Text>
        </View>
        <View style={styles.headerOne}>
            <Text style={styles.headerOneText}>Booking charges</Text>
            <View style={styles.amount}>
                <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ\/ebuzz/assets/rupee-indian.png')} style={styles.icon1}/>
                <Text style={styles.amount1}>499</Text>
            </View>
        </View>
        <View style={styles.headerOneLine}></View>
        <View style={styles.PaymentIcon}>
            <Image source={{uri:"https://png.pngtree.com/png-clipart/20230105/original/pngtree-green-check-mark-png-image_8873320.png"}} style={styles.icon2}/>
            <Text style={styles.UpiText}>UPI payment</Text>
        </View>
        <View style={styles.UPIid}> 
            <TextInput placeholder='Please enter UPI id for the payment' onChangeText={(text)=>setUpi(text)}></TextInput>
        </View>
        <View style={styles.UPIicons}>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('PhonePe')}>
                <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/icons8-phone-pe-48.png')} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'PhonePe' ? 'red' : 'black' }}>PhonePe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('GooglePay')}>
                <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/icons8-google-pay-48.png')} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'GooglePay' ? 'red' : 'black' }}>Google pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('Paytm')}>
                <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/icons8-paytm-48.png')} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'Paytm' ? 'red' : 'black' }}>Paytm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('BHIM')}>
                <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/icons8-bhim-48.png')} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'BHIM' ? 'red' : 'black' }}>BHIM</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.otherPayments}>
        <RadioForm
           radio_props={companies}
            initial={CompanyValue}
            onPress={value => setCompanyValue(value)} style={styles.otherPaymentsin}/>
        </View>
        <TouchableOpacity style={styles.paymentButton} onPress={handleProceedPayment}>
            <Text style={styles.paymentButtonbottom}>Proceed to payment</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgrey",
        width:"100%"
    },
    container1:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        elevation:4,
        width:"90%",
        paddingTop:"5%",
        paddingBottom:"8%",
        borderRadius:5
    },
    header:{
        width:"100%",
        flexDirection:"row",
        gap:20,
        alignItems:"center",
        paddingHorizontal:"2%",
        paddingVertical:"2%"
    },
    headerText:{
        fontSize:18,
        fontWeight:"500"
    },
    headerOne:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        paddingHorizontal:"4%"
    },
    amount:{
        flexDirection:"row",
        alignItems:"center"
    },
    icon1:{
        height:50,
        width:35,
        resizeMode:'contain'
    },
    amount1:{
        fontSize:40,
        fontWeight:"900"
    },
    headerOneText:{
        fontSize:16
    },
    headerOneLine:{
        height:6,
        backgroundColor:"lightgrey",
        width:"100%",
        marginVertical:"3%"
    },
    PaymentIcon:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width:"100%",
        paddingHorizontal:"5%",
        gap:10
    },
    icon2:{
        height:50,
        width:35,
        resizeMode:'contain'
    },
    UpiText:{
        fontSize:16,
        fontWeight:"500",
    },
    UPIid:{
        borderBottomWidth:1,
        width:"90%",
    },
    UPIicons:{
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between",
        paddingVertical:"5%",
    },
    UPIicon:{
        alignItems:"center"
    },
    paymentButton:{
        alignItems:"center",
        paddingVertical:"5%",
        backgroundColor:"rgb(138,186,38)",
        width:"90%",
        borderRadius:5,
        marginTop:"5%"
    },
    otherPayments:{
        alignItems:"flex-start",
        width:"85%",
        paddingVertical:"5%"
    },
    otherPaymentsin:{
        gap:10
    },
    paymentButtonbottom:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    }
})