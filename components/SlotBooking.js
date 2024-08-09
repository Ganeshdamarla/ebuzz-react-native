import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, Platform} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const SlotBooking = () => {
    const navigation=useNavigation();
    const [username, setUsername] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTechnician, setUserTechnician] = useState(""); 
    const [errors, setErrors] = useState({});
    const [companyValue, setCompanyValue] = useState(null);
    const [locationValue, setLocationValue] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    

    const validationForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!username) {
            errors.username = "Username is required";
            formIsValid = false;
        }
        else if (username.length > 12)
        {
            errors.username = "Please enter 12 characters only"
        }

        if (!userMobile) {
            errors.userMobile = "Mobile number is required";
            formIsValid = false;
        }
        else if (userMobile.length!==10){
            errors.userMobile = "please enter 10 digits "
        }

        if (!userEmail) {
            errors.userEmail = "Email is required";
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            errors.userEmail = "Email is invalid";
            formIsValid = false;
        }

        if (!userTechnician) {
            errors.userTechnician = "Technician name is required"; 
            formIsValid = false;
        }
        else if (userTechnician.length > 15)
        {
            errors.userTechnician = "Please enter 15 characters only"
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleBookingConfirmation = () => {
        if (validationForm()) {
            navigation.navigate('Payment')
        } else {
            console.log("Form validation failed!");
        }
    };

    const companies = [
            { label: "Wipro", value: 0 },
            { label: "LG", value: 1 },
            { label: "Voltas", value: 2 },
            { label: "Godrej", value: 3 },
            { label: "Other", value: 4 },
        ];

    const locations = [
        { label: "Hyderabad", value: 0 },
        { label: "Mumbai", value: 1 },
        { label: "Bangalore", value: 2 },
        { label: "Chennai", value: 3 },
        { label: "Other", value: 4 },
    ];

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || selectedDate;
        setShowDatePicker(Platform.OS === 'ios');
        setSelectedDate(currentDate);
    };

    return (
        <LinearGradient
            colors={['lightgrey', 'lightgrey']}
            style={styles.container}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}>
            <KeyboardAvoidingView style={styles.innerContainer}>
                <ScrollView>
                <View style={styles.header}>
                    <Feather name="arrow-left" color="black" size={35} onPress={()=>navigation.navigate("TechnicianList")}/>
                </View>
                    <Text style={styles.heading}>Service Technician Booking Slot</Text>
                    <View style={styles.form}>
                        <Text>Requestor's Name:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            onChangeText={text => setUsername(text)}
                        />
                        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                        <Text>Requestor's Mobile:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+91-"
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={(text) => setUserMobile(text)}
                        />
                        {errors.userMobile && <Text style={styles.errorText}>{errors.userMobile}</Text>}

                        <Text>Requestor's Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            onChangeText={text => setUserEmail(text)}
                        />
                        {errors.userEmail && <Text style={styles.errorText}>{errors.userEmail}</Text>}

                        <Text>Technician Name (as shown on uniform):</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Technician name"
                            onChangeText={text => setUserTechnician(text)}
                        />
                        {errors.userTechnician && <Text style={styles.errorText}>{errors.userTechnician}</Text>}
                    </View>

                    <View style={styles.radioContainer}>
                        <Text style={styles.radioLabel}>Which Company is your product from?</Text>
                        <RadioForm
                            radio_props={companies}
                            initial={companyValue}
                            onPress={value => setCompanyValue(value)}
                        />
                        {companyValue === 4 && (
                            <TextInput
                                style={styles.input}
                                placeholder="Other company"
                            />
                        )}
                    </View>

                    <View style={styles.radioContainer}>
                        <Text style={styles.radioLabel}>Select Your Location:</Text>
                        <RadioForm
                            radio_props={locations}
                            initial={locationValue}
                            onPress={value => setLocationValue(value)}
                        />
                        {locationValue === 4 && (
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your full address"
                            />
                        )}
                    </View>
                    <Text style={styles.radioLabel1}>
                        Please book Your Slot Date:
                    </Text>
                    <TouchableOpacity style={styles.datetime} onPress={() => setShowDatePicker(true)}>
                        <Text>Date: {selectedDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={selectedDate}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <TouchableOpacity onPress={handleBookingConfirmation} style={styles.confirmButton}>
                        <Text style={styles.confirmText}>CONFIRM BOOKING</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        alignItems:'baseline',
        alignItems:'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
       
    },
    form: {
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
    input: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400',
        marginTop: '3%',
        marginBottom: '2%',
        borderWidth: 1,
        height: 50,
        // width: 230,
        borderRadius: 10,
        paddingLeft: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: '5%',
    },
    radioContainer: {
        paddingHorizontal: '5%',
    },
    radioLabel: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: '3%',
    },
    confirmButton: {
        backgroundColor: 'rgb(138,186,38)',
        height: hp(6),
        width: wp(50),
        borderRadius: 8,
        marginTop: '5%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    },
    confirmText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight:"bold"
    },
    bgcolor:{
        backgroundColor:'#efc7c2',
        width:wp(100),
        height:hp(100),
        marginVertical:'15%',
        marginHorizontal:'6%',
    },
    datetime:{
        backgroundColor:'34a0a4',
        borderWidth:3,
        height:hp(4),
        width:wp(40),
        paddingHorizontal:'4%',
        marginHorizontal:'8%',
        marginTop:'2%',
        borderRadius:20,
    },
    radioLabel1:{
        marginHorizontal:'6%',
        fontSize:18,
        fontWeight:'500',
    },
    header:{
        width:"80%",
        alignItems:"flex-start",
        justifyContent:"center",
         marginTop: '10%',
    },
});

export default SlotBooking;