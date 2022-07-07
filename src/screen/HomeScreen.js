import React,{useRef,useEffect} from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = ({navigation}) => {
    const refRBSheet = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            refRBSheet.current.open()
        },2000)
    },[])
  return (
    <View>
    <View style={styles.container1}>
    
    <Image style={{height:'60%', width:'80%'}} 
    source={require('../../assets/logo.png')} resizeMode="contain" />
    </View>
      
      <RBSheet
      ref={refRBSheet}
      height={350}
      openDuration={250}
      customStyles={{
        container: {
          paddingTop:40,
          alignItems: "center",
          borderRadius:20

          
        }
      }}
    >
    <View>
    
    <FontAwesome5 name='phone-alt' size={40} color={'#036eb6'} />
    
    </View>
    
    
    <Text style={styles.text}>Allow <Text style={{color:'black'}}>DSRMANTRA</Text>  
    to make and manage phone calls?</Text>
    <TouchableOpacity onPress={()=>{
      refRBSheet.current.close()
      setTimeout(()=>{
        navigation.navigate('Otp')
      },2000)
    }}>
    <Text style={styles.text1}>Allow</Text>
    </TouchableOpacity>
   
    <Text style={styles.text2}>Deny</Text>
    </RBSheet>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        fontSize:17

    },
    text1:{
        marginTop:20,
        fontSize:17,
        color:'#036eb6'
    },
    text2:{
        marginTop:20,
        fontSize:17,
        color:'#036eb6'


    },
    container1:{
        alignItems:'center',
        marginTop:100
    }
})