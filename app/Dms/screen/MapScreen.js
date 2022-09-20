import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image  } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MapHeader from '../components/MapHeader '



const MapScreen = () => {
  return (
    <View>
      <MapHeader />
      <TouchableOpacity>
      <Image style={{height:'85%',
        width:'90%',
        alignSelf:'center'
    }} 
       source={require('../../../assets/map.jpeg')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#db1446',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      }} >
      <Text style={{fontWeight:'bold',fontSize:17,color:'#fff'}}>Confirm Location</Text>
      <AntDesign name='arrowright' size={25} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})