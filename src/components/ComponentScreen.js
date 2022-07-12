import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ComponentScreen = () => {
  return (
    <View>
    <View style={{
        flexDirection:'row',
        marginTop:3,
        justifyContent:'space-around'
      }}>
      <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:'#9df5b4',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>101</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:'#9df5b4',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>401</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:'#9df5b4',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>301</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:'#9df5b4',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>206</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:'#9df5b4',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text>101</Text>
      </TouchableOpacity>
    
      </View>
    </View>
  )
}

export default ComponentScreen

const styles = StyleSheet.create({})