import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
 import AntDesign from 'react-native-vector-icons/AntDesign'

const CnfHeader = () => {
  return (
    <View>
    <View style={{
        flexDirection:'row',
        height:50,
        width:'100%',
        backgroundColor:'#6cf229',
        alignItems:'center',
        borderBottomWidth:1
        
    }} >
    <AntDesign name='arrowleft' size={30}  color='#f2296c' />
    <Text style={{marginLeft:20, fontWeight:'bold'}}>OrderConfirmation</Text>
      <AntDesign style={{marginLeft:100}} name='message1' size={30} color='#f25129' />
      </View>
      <View style={{
        height:60,
        width:'100%',
        backgroundColor:'#5c9c3d',
        flexDirection:'row',
        alignItems:'center',
        
      }}>
      <Text>HSD434</Text>
      <View style={{
        height:35,
        width:35,
        borderRadius:20,
        backgroundColor:'#eb4e10',
        marginLeft:150
      }}>
      <Text style={{
        alignSelf:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'#fff',
        padding:5
      }}>₹</Text>
      </View>
      <Text style={{fontWeight:'bold',fontSize:17,marginLeft:5}}>26,680</Text>
      </View>
     
    </View>
  )
}

export default CnfHeader

const styles = StyleSheet.create({})