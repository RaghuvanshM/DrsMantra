import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const SupportHeader = () => {
  return (
    <View style={{
        height:60,
        width:'100%',
        backgroundColor:'#eef5ed',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    }}>
    <AntDesign style={{marginLeft:10}} name='arrowleft' size={24} color='#000' />
      <Text style={{fontWeight:'bold',color:'#000',marginLeft:10,fontSize:16}}> Support</Text>
      <TouchableOpacity>
      
      <Entypo style={{marginLeft:150}} name='arrow-up' size={24} color='#0e65f0' />
      </TouchableOpacity>
    
    </View>
  )
}

export default SupportHeader

const styles = StyleSheet.create({})