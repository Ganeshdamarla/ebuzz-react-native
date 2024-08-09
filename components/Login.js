import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Image,ScrollView, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import auth from '../FireBase/FireBaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const navigation=useNavigation();

    const[Email,setEmail]=useState("");
    const[EmailVerify,setEmailVerify]=useState(false);
    const[PasswordOne,setPasswordOne]=useState("");
    const[PasswordOneVerify,setPasswordOneVerify]=useState(false);
    const[ErrorMess,setErrorMess]=useState('');
    const[isSecure,setisSecure]=useState(true);
    const[ErrorPass,setErrorPass]=useState("")
    const[error,setError]=useState('');


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

    const HandleSignup=()=>{
        setErrorPass('');
        setError('');
        if(Email===''||PasswordOne===''){
            setErrorMess("These is Mandatory field")
        }else{
           signInWithEmailAndPassword(auth,Email,PasswordOne).then(()=>navigation.navigate("DrawerNavigation"))
           .catch((error)=>{
            setError(error.message)
           })
        }
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainView}>
    <ScrollView style={styles.container}>
           <View>
                <View style={styles.LoginSlogan}>
                    <Text style={styles.LoginSloganText}>Bringing Energy to</Text>
                    <Text style={styles.LoginSloganText}>Your Doorstep</Text>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='Email' onChangeText={(text)=>EmailVal(text)}></TextInput>
                    {Email.length<1 ? null:EmailVerify?(<Feather name="check-circle" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={styles.inputFirstIcon}/>)}
                </View>
                {Email.length<1 ? null:EmailVerify?null:<Text style={styles.inputError}>Enter proper Email Address</Text>}
                {!Email.length<1?null:ErrorMess?<Text style={styles.inputError}>{ErrorMess}</Text>:null}
            </View>
            <View style={styles.input2container}>
                <View style={styles.input}>
                    <TextInput placeholder='Password' onChangeText={(text)=>PassValidOne(text)} secureTextEntry={isSecure}></TextInput>
                    {isSecure ?(<Feather name="eye-off" color="rgb(138,186,38)" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecure(!isSecure)}/>):<Feather name="eye" color="red" size={20} style={styles.inputFirstIcon} onPress={()=>setisSecure(!isSecure)}/>}
                </View>
                <View style={styles.input1pass}>
                    <View>
                    {PasswordOne.length<1 ? null:PasswordOneVerify?null:<Text style={styles.inputError1}>Enter proper password</Text>}
                    {!PasswordOne.length<1?null:ErrorMess?<Text style={styles.inputError1}>{ErrorMess}</Text>:null}
                    </View>
                    <View>
                        <Text style={styles.Forgpass} onPress={()=>navigation.navigate("ForgetPassword")}>Forget Password ?</Text>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={HandleSignup}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <Text style={styles.buttonbelowText} onPress={()=>navigation.navigate("SignUp")}>Don't have an account ? <Text style={styles.buttonbelowTextpart}>Signup</Text></Text>
            </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgrey",
        // justifyContent:"flex-start",
        // gap:20,
    },
    LoginSlogan:{
        alignItems:"center",
        marginVertical:"25%",
    },
    LoginSloganText:{
        fontSize:35,
        color:'black',
        fontWeight:"bold",
    },
    input:{
        borderWidth:1,
        width:"80%",
        borderRadius:5,
        padding:"2%",
        alignSelf:"center",
        marginTop:"5%"
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
    input2container:{
        justifyContent:"center",
        alignItems:"center"
    },
    inputError1:{
        color:"red",
    },
    input1pass:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        marginTop:"2%"
    },
    Forgpass:{
        
    },
    button:{
        paddingHorizontal:"20%",
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
    buttonbelowText:{
        alignSelf:"center",
        marginTop:"2%"
    },
    buttonbelowTextpart:{
        color:'rgb(138,186,38)',
        fontWeight:"bold"
    },
    errorMessage:{
        color:"red",
        alignSelf:"center"
     },
     mainView:{
        flex:1
     }
})