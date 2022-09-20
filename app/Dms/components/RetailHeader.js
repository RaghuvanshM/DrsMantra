import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const RetailHeader = () => {
  return (
    <View style={{
        height:60,
        width:'100%',
        backgroundColor:'#67f56c',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    }}>
     <AntDesign name='arrowleft' size={30} color ='#9fa69f' />
     <Text style={{fontWeight:'bold'}}>AllProducts</Text>
     <AntDesign name='filter' size={30} color ='#9fa69f' />
     <AntDesign name='search1' size={30} color ='#9fa69f' />
     <Entypo name='message' size={30} color ='#ed1342' />
     <Entypo name='dots-three-vertical' size={30} color ='#ed1342' />
     
    </View>
  )
}

export default RetailHeader

const styles = StyleSheet.create({})