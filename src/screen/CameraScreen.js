import React from 'react'
import { StyleSheet, 
Text, View,TouchableOpacity,
TextInput,ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HeaderScreeen from '../components/HeaderScreeen '

const CameraScreen = ({navigation}) => {
  return (
    <View>
      
    <HeaderScreeen />
    <View style={styles.container}>
    <Text style={styles.text}>Click Your Selfie With Distributor Location</Text>
    <ScrollView style={{padding:10}}>
    <View style={styles.cameraBox}>
    <TouchableOpacity>
    <Ionicons style={styles.camera} name='camera' size={80} color= '#2dbd51' />
    <Text style={styles.text2}>Take Photo</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.box}>
    <Text style={styles.text3}>Remarks if any</Text>
    <TextInput style={styles.textInput} placeholder='paragraph text' />
    </View>
    </ScrollView>
    </View>
    
    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('TimerScreen')}>
    <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Submit</Text>
    </TouchableOpacity>
   
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
    container:{
        height:'80%',
        width:'85%',
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:15,
        borderRadius:7,
        
    },
    text:{
        fontWeight:'bold',
        marginTop:10,
        marginLeft:10
    },
    cameraBox:{
        height:150,
        width:'80%',
        borderWidth:0.3,
        alignSelf:'center',
        marginTop:50,
        borderRadius:5,
        justifyContent:'center',
        elevation:1

    },
    camera:{
        alignSelf:'center',
        
    },
    text2:{
        alignSelf:'center',
        color:'#2dbd51'
    },
    box:{
        height:140,
        width:'100%',
        borderWidth:1,
        marginTop:70
    },
    text3:{
        marginTop:20,
        fontWeight:'bold',
        padding:5,
        marginLeft:6
    },
    textInput:{
        borderBottomWidth:0.3,
        width:'80%',
        marginTop:20,
        alignSelf:'center'
    },
    btn:{
        height:45,
        width:'95%',
        backgroundColor:'#436cbf',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        justifyContent:'center',
        marginTop:20
    }
})