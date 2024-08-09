import { StyleSheet, Text, View,SectionList, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';


const TechnicianList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
            <View style={styles.header}>
            <Feather name="arrow-left" color="black" size={35} onPress={()=>navigation.navigate("DrawerNavigation")}/>
        </View>
        <Text style={styles.headerText}>Choose Your Technisian</Text>  
            <View style={styles.techNames}>
              <TouchableOpacity title="TechnisianProfile" onPress={()=> navigation.navigate("Technicianprofile",{
                name:"Jhon Advith Paul", work:"A/C technisian",location:"Kondapur,Hyderabad",services:"Power Saver A/C service:",
                repair:"Anti-rust AC Service:",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
                })}>
              <Text style={styles.item}>Jhon Advith Paul</Text>
              </TouchableOpacity>
              
              <TouchableOpacity title="TechnisianProfile" onPress={()=> navigation.navigate("Technicianprofile",{
                name:"James Andreson",work:"Laptop Technisian",location:"Hitech-City,Hyderabad",services:"Laptop all-in-one service:",
                repair:"windows laptop repair:",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
              })}>
              <Text style={styles.item}>James Anderson</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate("Technicianprofile",{
                name:"Abraham",work:"Fridges Technisian",location:"Charminar,Hyderabad",services:"Fridges service:",
                repair:"Reparing fridges",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
              })}>
              <Text style={styles.item}>Abraham</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate("Technicianprofile",{
                name:"David Paul",work:"Coolers Technisian",location:"Kukatpally,Hyderabad",services:"Coolers service:",
                repair:"Servicing check/repair:",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
              })}>
              <Text style={styles.item}>David Paul</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate("Technicianprofile",{
                name:"Moses",work:"T.V Technisian",location:"N.T.R-Gardens,Hyderabad",services:"T.V all type of services:",
                repair:"Install and un-install T.V:",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
              })}>
              <Text style={styles.item}>Moses</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> navigation.navigate("Technicianprofile",{
                name:"Jashuva",work:"Fans Technisian",location:"J.B.S,Hyderabad",services:"Fans service:",
                repair:"Current remote fans:",
                image: require('C:/Users/91917/OneDrive/Desktop/ReactNativ/ebuzz/assets/[removal.ai]_13e91e08-e812-4139-ba5a-06332be7ca07-bd560d34-cd93-4283-b191-ed0210ff0f02.png')
              })}>
              <Text style={styles.item}>Jashuva</Text>
              </TouchableOpacity>
            </View>
    </View>
  )
}

export default TechnicianList

const styles = StyleSheet.create({
    
  container:{
    // paddingVertical:'10%',
    flex:1,
    justifyContent:"center",
    backgroundColor:'#8ac926',
    alignItems:"center"
    },
  item: {
      backgroundColor: 'white',
      padding: '8%',
      marginVertical: 5,
      marginHorizontal:'0%',
      marginBottom:'10%',
      borderRadius:20,
      // paddingHorizontal:'20%',
      fontWeight:'600',
      fontSize:17,
      textAlign:"center"
  },
  title: {
    fontSize: 20,
},
headerText: {
  fontSize: 23,
  borderRadius:20,
  padding:'5%',
  color:'white',
  fontWeight:'600',
  },
  header:{
    width:"90%",
    alignItems:"flex-start",
    justifyContent:"center",
    paddingTop:"10%"
},
techNames:{
  width:"80%"
}
})