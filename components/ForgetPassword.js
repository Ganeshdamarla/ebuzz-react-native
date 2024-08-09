import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Image,ScrollView, KeyboardAvoidingView} from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import auth from '../FireBase/FireBaseAuth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
    const navigation=useNavigation();
    const[Email,setEmail]=useState("");
    const[EmailVerify,setEmailVerify]=useState(false);
    const[ErrorMess,setErrorMess]=useState('');
    const[error,setError]=useState('');
    const[ErrorPass,setErrorPass]=useState("")



    const EmailVal=(text)=>{
        setEmail(text);
        setEmailVerify(false);
        setErrorPass('');
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{3,}$/.test(text)){
            setEmail(text);
            setEmailVerify(true);
        }
    }
    
    const HandleSignup=async()=>{
        setError(''); 
        if(Email===''){
            setErrorMess("These is Mandatory field")
        }else{
           await sendPasswordResetEmail(auth,Email).then(()=>{alert("The mail was sent successfully. Check your mail.");
        navigation.navigate("Login")} )
           .catch((error)=>setError(error.message))
        }
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainView}>
    <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Feather name="arrow-left" color="black" size={35} onPress={()=>navigation.navigate("Login")}/>
            </View>
        <View style={styles.imgContainer}>
            <Image source={{uri:"https://png.pngtree.com/png-clipart/20230118/original/pngtree-reset-password-to-gain-more-secure-account-png-image_8920326.png"}} style={styles.img}/>
        </View>
        <View style={styles.input}>
            <TextInput placeholder='Email' onChangeText={(text)=>EmailVal(text)}></TextInput>
            {Email.length<1 ? null:EmailVerify?(<Feather name="check-circle" color="green" size={20} style={styles.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={styles.inputFirstIcon}/>)}
        </View>
        {Email.length<1 ? null:EmailVerify?null:<Text style={styles.inputError}>Enter proper Email Address</Text>}
        {!Email.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            <View>
                <TouchableOpacity style={styles.button} onPress={HandleSignup}>
                    <Text style={styles.buttonText}>Send Password reset link</Text>
                </TouchableOpacity>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                {setErrorMess&&<Text  style={styles.errorMessage}>{ErrorPass}</Text>}
            </View>
    </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    container:{
        // flex:1,
        backgroundColor:"lightgrey",
    },
    imgContainer:{
        alignSelf:"center",
        paddingVertical:"20%"
    },
    img:{
        width:300,
        height:300,
        resizeMode:"contain"
    },
    input:{
        borderWidth:1,
        width:"80%",
        borderRadius:5,
        padding:"2%",
        alignSelf:"center"
        
    },
    inputFirstIcon:{
        position:"absolute",
        right:10,
        bottom:10
     },
     inputError:{
        color:"red",
        marginLeft:"10%"
    },
    button:{
        paddingHorizontal:"18%",
        paddingVertical:"3%",
        borderRadius:5,
        backgroundColor:'rgb(138,186,38)',
        marginTop:"4%",
        alignSelf:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold"
    },
    errorMessage:{
        color:"red",
        alignSelf:"center"
     },
     header:{
        width:"80%",
        alignItems:"flex-start",
        justifyContent:"center",
         marginTop: '10%',
         paddingHorizontal:"5%",
         
    },
})