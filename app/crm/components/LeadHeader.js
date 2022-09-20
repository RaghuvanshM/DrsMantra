import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SalesHeader = () => {
  return (
    <View style={{
        height:60,
        width:'100%',
        backgroundColor:'#4bc1db',
        flexDirection:'row',
        alignItems:'center',
        

    }}>
    <AntDesign  style={{marginLeft:10}} name='arrowleft' size={25} color='#000' />
      <Text style={{marginLeft:20, fontWeight:'bold'}}>NO Sales Reason</Text>
     
    </View>
  )
}

export default SalesHeader

const styles = StyleSheet.create({})