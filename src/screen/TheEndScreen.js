import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const TheEndScreen = () => {
  return (
    <View>
    <View style={{
      alignItems:'center',
      marginTop:30
    }}>
    <TouchableOpacity style={{

    }}>
    <Image style={{height:150,width:150}} source={require('../../assets/logo.png')} />
    </TouchableOpacity>
    <Text style={{fontWeight:'bold'}}>DSRMANTRA</Text>
    <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:10}}>Accelerating Groth</Text>
    <TouchableOpacity>
    <Image style={{height:200,width:200,alignSelf:'center', marginTop:50}} source={require('../../assets/images.jpeg')} />
    </TouchableOpacity>
    <Text style={{marginTop:20,color:'#05f74a',fontWeight:'bold'}}>Day Ended Successfully</Text>
    </View>
    <TouchableOpacity style={{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40
    }}>
    <Entypo name='cross' size={30} color='#f70529' />
    <Text style={{color:'#3baee3',fontWeight:'bold'}}>CLOSE APP</Text>
    </TouchableOpacity>
    </View>
  )
}

export default TheEndScreen

const styles = StyleSheet.create({})