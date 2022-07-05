import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapHeader = () => {
  return (
    <View style={{
        height:50,
        width:'100%',
        borderBottomWidth:0.5,
        justifyContent:'center',
        elevation:2
    }}>
      <Text style={{marginLeft:20,fontWeight:'bold',fontSize:18}}>Location</Text>
    </View>
  )
}

export default MapHeader

const styles = StyleSheet.create({})