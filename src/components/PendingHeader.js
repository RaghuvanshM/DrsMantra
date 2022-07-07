import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PendingHeader = () => {
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
      <Text style={{fontWeight:'bold',color:'#000',marginLeft:10,fontSize:16}}>My Pending Requests</Text>
      <TouchableOpacity style={{
        height:40,
        width:90,
        backgroundColor: '#186cf2',
        marginLeft:50,
        borderRadius:10
      }}>
      
      </TouchableOpacity>
    </View>
  )
}

export default PendingHeader

const styles = StyleSheet.create({})