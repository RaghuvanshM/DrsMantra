import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const OutletScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <AntDesign style={{marginLeft:10}} name='arrowleft' size={25} />
        <Text>Demo Repot</Text>
        
        <AntDesign  name='search1' size={25} />
        <AntDesign name ='dingding' size ={25} />
        <Text>New</Text>
      <Entypo name='dots-three-vertical' size={25} />
      </View>
    </View>
  )
}

export default OutletScreen

const styles = StyleSheet.create({
    container:{
        height:40,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        

    }
})