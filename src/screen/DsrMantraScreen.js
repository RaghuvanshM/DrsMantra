import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DsrHeader from '../components/DsrHeader'

const DsrMantraScreen = ({navigation}) => {
  return (
    <View>
      <DsrHeader />
    <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50%'
    }} onPress={()=>navigation.navigate('ChangeBeatScreen')} >
    <AntDesign name='home' size={200} color='#42f5b3'/>    
    </TouchableOpacity>
    <Text style={{alignSelf:'center',marginTop:10,color:'#b1b3b2'}}>Outlets Added successfully</Text>
    <Text  style={{alignSelf:'center',marginTop:10,}}>Tet</Text>
    <Text  style={{alignSelf:'center',marginTop:10,fontWeight:'bold',fontStyle:'italic'}}>AJNALA</Text>
    </View>
  )
}

export default DsrMantraScreen

const styles = StyleSheet.create({})