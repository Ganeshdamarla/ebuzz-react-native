import { StyleSheet, Text, View ,TouchableOpacity,Animated} from 'react-native'
import { useRef } from 'react'
const Animation = () => {

  const animation=useRef(new Animated.Value(0)).current;

  const visible=()=>{
    Animated.timing(animation,{
      toValue:1,
      duration:5000,
      useNativeDriver:true
    }).start()
  }

  const hidden=()=>{
    Animated.timing(animation,{
      toValue:0,
      duration:3000,
      useNativeDriver:true
    }).start()
  }


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animi,{opacity:animation}]}>
          <Text style={styles.animiText}>hiii</Text>
      </Animated.View>
      
      <View>
      <TouchableOpacity style={styles.button} onPress={visible}>
          <Text>Show Text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={hidden}>
          <Text>Hide Text</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Animation

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  animi:{
    margin:"10%"
  },
  animiText:{
      fontSize:20,
      fontWeight:"bold"
  },
  button:{
    backgroundColor:"plum",
    paddingVertical:"3%",
    paddingHorizontal:"5%",
    borderRadius:5,
    margin:"5%"
  }
})