import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PerformanceHeader = () => {
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
    <Text style={{fontWeight:'bold',color:'#000',marginLeft:10,fontSize:16}}>Today's Performance</Text>
    <TouchableOpacity style={{
        height:40,
        width:70,
        backgroundColor:"#4287f5",
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30

    }}>
     <AntDesign name='sync' size={15} color='#fff' />
    <Text style={{marginLeft:10}}>sync</Text>
    </TouchableOpacity>
    </View>
  )
}

export default PerformanceHeader

const styles = StyleSheet.create({})