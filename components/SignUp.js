import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import auth from '../FireBase/FireBaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import WelcomePage from './WelcomePage'

const SignUp = () => {
    const navigation=useNavigation();
    const[Name,setName]=useState("");
    const[NameValidation,setNameValidation]=useState(false);
    const[Email,setEmail]=useState("");
    const[EmailVerify,setEmailVerify]=useState(false);
    const[PasswordOne,setPasswordOne]=useState("");
    const[PasswordOneVerify,setPasswordOneVerify]=useState(false);
    const[PasswordTwo,setPasswordTwo]=useState("");
    const[PasswordTwoVerify,setPasswordTwoVerify]=useState(false);
    const[isSecure,setisSecure]=useState(true);
    const[isSecureOne,setisSecureOne]=useState(true);
    const[ErrorPass,setErrorPass]=useState("")
    const[ErrorMess,setErrorMess]=useState('');
    const[error,setError]=useState('');

    const NameVerify=(text)=>{
        setName(text);
        setNameValidation(false)
        if(text.length>1){
            setNameValidation(true)
        }
    }

    const EmailVal=(text)=>{
        setEmail(text);
        setEmailVerify(false);
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{3,}$/.test(text)){
            setEmail(text);
            setEmailVerify(true);
        }
    }

    const PassValidOne=(text)=>{
        setPasswordOne(text);
        setPasswordOneVerify(false);
        if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(text)){
            setPasswordOne(text);
            setPasswordOneVerify(true);
        }
    }

    const PassValidTwo=(text)=>{
        setPasswordTwo(text);
        setPasswordTwoVerify(false);
        if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(text)){
            setPasswordTwo(text);
            setPasswordTwoVerify(true);
        }
    }
    
    const HandleSignup=()=>{
        setErrorPass('');
        setError('');
        if(Name===''||Email===''||PasswordOne===''||PasswordTwo===''){
            setErrorMess("These is Mandatory field")
        }
        else if(PasswordOne!==PasswordTwo){
            setErrorPass("password not matched")
        }else{
            createUserWithEmailAndPassword(auth, Email, PasswordOne).then(() => {
                navigation.navigate('DrawerNavigation', { Name: Name, Email: Email })})              
            .catch((error)=>{
                setError(error.message)
            }) 
        }
        
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainView}>
        <ScrollView style={styles.container}>
            <View style={styles.LoginSlogan}>
                    <Text style={styles.LoginSloganText}>Spark Joy with Our</Text>
                    <Text style={styles.LoginSloganText}>Electrical Expertise</Text>
            </View>
            <View style={styles.inputView}>
                <View style={styles.input}>
                    <TextInput placeholder='Full Name' onChangeText={(text)=>NameVerify(text)}></TextInput>
                    {Name.length<1 ? null:NameValidation?(<Feather name="check-circle" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={styles.inputFirstIcon}/>)}
                </View>
                {Name.length<1 ? null:NameValidation?null:<Text style={styles.inputError}>Name should be greater than 1 character</Text>}
                {!Name.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            </View>
            <View style={styles.inputView}>
                <View style={styles.input}>
                    <TextInput placeholder='Email' onChangeText={(text)=>EmailVal(text)}></TextInput>
                    {Email.length<1 ? null:EmailVerify?(<Feather name="check-circle" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={styles.inputFirstIcon}/>)}
                </View>
                {Email.length<1 ? null:EmailVerify?null:<Text style={styles.inputError}>Enter proper Email Address</Text>}
                {!Email.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            </View>
            <View style={styles.inputView}>
                <View style={styles.input}>
                    <TextInput placeholder='Password' onChangeText={(text)=>PassValidOne(text)} secureTextEntry={isSecure}></TextInput>
                    {isSecure ?(<Feather name="eye-off" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecure(!isSecure)}/>):<Feather name="eye" color="red" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecure(!isSecure)}/>}
                </View>
                {PasswordOne.length<1 ? null:PasswordOneVerify?null:<Text style={styles.inputError}>Enter proper password</Text>}
                {!PasswordOne.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            </View>
            <View style={styles.inputView}>
                 <View style={styles.input}>
                    <TextInput placeholder='Confirm Password' onChangeText={(text)=>PassValidTwo(text)} secureTextEntry={isSecureOne}></TextInput>
                {isSecureOne ?(<Feather name="eye-off" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecureOne(!isSecureOne)}/>):<Feather name="eye" color="red" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecureOne(!isSecureOne)}/>}
                </View>
                {PasswordTwo.length<1 ? null:PasswordTwoVerify?ErrorPass?<Text style={styles.inputError}>{ErrorPass}</Text>:null:<Text style={styles.inputError}>Enter proper password</Text>}
                {!PasswordTwo.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            
            </View>  
            <View>
                <TouchableOpacity style={styles.button} onPress={HandleSignup}>
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <Text style={styles.buttonbelowText} onPress={()=>navigation.navigate("Login")}>Already have an account ? <Text style={styles.buttonbelowTextpart}>SignIn</Text></Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:"lightgrey",
    },
    LoginSlogan:{
        alignItems:"center",
        marginVertical:"25%",
    },
    LoginSloganText:{
        fontSize:35,
        color:'',
        fontWeight:"bold"
    },
    input:{
        borderWidth:1,
        width:"80%",
        borderRadius:5,
        padding:"2%",
        // margin:"3%",
        alignSelf:"center",
        // marginBottom:"5%"
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
    buttonbelowText:{
        alignSelf:"center"
    },
    buttonbelowTextpart:{
        color:'rgb(138,186,38)',
        fontWeight:"bold"
    },
    errorMessage:{
        color:"red",
        alignSelf:"center"
     },
     inputView:{
        paddingBottom:"5%"
     }
})