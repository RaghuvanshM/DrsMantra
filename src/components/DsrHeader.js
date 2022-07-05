import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DsrHeader = () => {
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
      <Text style={{fontWeight:'bold',color:'#000',marginLeft:10,fontSize:16}}>DsrMantra</Text>
    </View>
  )
}

export default DsrHeader

const styles = StyleSheet.create({})