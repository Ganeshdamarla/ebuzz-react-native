import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

const UserProfile = () => {
  
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [editable, setEditable] = useState(false);

  const handleSave = () => {
    setEditable(false);
  };

  return (
    
      <KeyboardAvoidingView style={styles.container1} behavior="padding">
        <ScrollView style={styles.container}>
        <View style={styles.profileImageView}>
          <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_20fd3f4a-734f-440e-8ad5-fb3440e2aa91-users-vector-icon-png_260862.png')} style={styles.profileImage}/>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.userDetailsRow}>
            <Text style={styles.textBold}>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              editable={editable}
            />
          </View>
          <View style={styles.userDetailsRow}>
            <Text style={styles.textBold}>Date of Birth:</Text>
            <TextInput
              style={styles.input}
              value={dob}
              onChangeText={text => setDob(text)}
              editable={editable}
            />
          </View>
          <View style={styles.userDetailsRow}>
            <Text style={styles.textBold}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              editable={editable}
              keyboardType='email-address'
            />
          </View>
          <View style={styles.userDetailsRow}>
            <Text style={styles.textBold}>Mobile Number:</Text>
            <TextInput
              style={styles.input}
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)}
              editable={editable}
              maxLength={10}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.userDetailsRow}>
            <Text style={styles.textBold}>Address:</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={text => setAddress(text)}
              editable={editable}
              multiline
            />
          </View>
        </View>
        <View>
          {editable ? (
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => setEditable(true)}>
              <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
          )}
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",

  },
  container1:{
    flex:1,
    alignItems:"center",
    backgroundColor: 'lightgrey',
    
  },
  textBold: {
    fontWeight: 'bold',
  },
  profileImageView:{
    alignSelf:"center"
  },
  userDetails: {
    marginTop: 20,
    alignItems:"center"
  },
  userDetailsRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    width:"80%"
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginLeft: 10,
    paddingVertical: 5,
    width:"80%"
  },
  profileImage: {
    height: 200,
    width: 200,
    resizeMode: "contain"
  },
  button: {
    paddingHorizontal: "20%",
    paddingVertical: "3%",
    borderRadius: 5,
    backgroundColor: 'rgb(138,186,38)',
    marginTop: "4%",
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
});
