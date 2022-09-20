import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const OutletImgHeader = () => {
  return (
    <View style={{
        height:60,
        width:'100%',
        backgroundColor:'#eef5ed',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    }}>
    
      <Text style={{fontWeight:'bold',color:'#000',marginLeft:10,fontSize:16}}>Outlet Image</Text>
    </View>
  )
}

export default OutletImgHeader

const styles = StyleSheet.create({})