import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SupportHeader from '../components/SupportHeader'
import ComponentScreen from '../components/ComponentScreen'

const SupportScreen = ({navigation}) => {
  return (
    <View>
      <SupportHeader />
      <ComponentScreen />
      <TouchableOpacity>
      
      <Image style={{height:180,width:180,alignSelf:'center',marginTop:100}} source={require('../../assets/photo.webp')} />
      </TouchableOpacity>
      <Text style={{color:'#1df035',alignSelf:'center',marginTop:2,fontWeight:'bold'}}>Happy to help</Text>
      <Text style={{alignSelf:'center',marginTop:2,fontWeight:'bold'}}>while to us support@dsrmantra.in</Text>
      <Text style={{alignSelf:'center',marginTop:2,fontWeight:'bold'}}>or call us at 011 22 22 222</Text>
      <TouchableOpacity style={{
        flexDirection:'row'
      }} onPress={()=>navigation.navigate('TheEndScreen')}>
      <Image style={{height:50,width:50, marginLeft:70, marginTop:30}} source={require('../../assets/logo.png')} />
      <Text style={{marginTop:40}}>DSRMANTRA</Text>
      
      </TouchableOpacity>
      <Text style={{marginLeft:30}}>App version 2022 & use any persion</Text>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#d5ded6',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
      }}>
      <FontAwesome name='whatsapp' size={25} color="#61fa" />
      <Text style={{marginLeft:10,color:'#cc61fa'}}>SHARE</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:'100%',
        width:150,
        backgroundColor:'#138deb',
        marginLeft:110,
        flexDirection:'row',
        alignItems:'center',
      }}>
      <Ionicons style={{marginLeft:10,}} name='call-outline' size={30} color="#fff" />
      <Text style={{marginLeft:10,fontWeight:'bold',color:'#fff'}}>CALL US</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default SupportScreen

const styles = StyleSheet.create({})