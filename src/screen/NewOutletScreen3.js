
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OutletHeader2 from '../components/OutletHeader2'
import MapScreen from './MapScreen'

const NewOutletScreen3 = ({navigation}) => {
  return (
    <View>
      <OutletHeader2 />
      <TouchableOpacity>
      <Image style={{height:'85%',
        width:'90%',
        alignSelf:'center'
    }} 
       source={require('../../assets/map.jpeg')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:40,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#db1446',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      }} onPress={()=>navigation.navigate('NewOutletScreen4')}>
      <Text style={{fontWeight:'bold',fontSize:17,color:'#fff'}}>Confirm Location</Text>
      <AntDesign name='arrowright' size={25} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}


export default NewOutletScreen3

const styles = StyleSheet.create({})