import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import OutletImgHeader from '../components/OutletImgHeader '



const OutletImgScreen = ({navigation}) => {
  return (
    <View >
     <OutletImgHeader />
     
     <View style={{
      height:'62%',
      width:'80%',
      borderWidth:0.5,
      marginTop:20,
      alignSelf:'center'
     }}>
     <Text style={{fontWeight:'bold',marginLeft:10}}>Capture Outlet Image</Text>
     <View style={{
      height:'62%',
      width:'80%',
      borderWidth:0.5,
      marginTop:20,
      alignSelf:'center'
     }}>
    <TouchableOpacity style={{
      marginTop:30,
      marginLeft:50,
    }}>
    <Entypo style={{
      marginLeft:30,
      marginTop:20
    }} name='camera' size={70} color='#1bb0f5'/>
    <Text style={{marginLeft:20,marginTop:7,color:'#19b0f5',fontSize:12}}>TAKE PHOTO</Text>
    </TouchableOpacity>
     </View>
     <Text style={{marginTop:20,marginLeft:25,color:'#f71920',fontSize:12,fontWeight:'bold'}}>This question is compulsory</Text>
     </View>
     <TouchableOpacity style={{
      backgroundColor:'#1bb0f5',
      height:50,
      width:'95%',
      marginTop:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    }} onPress={()=>navigation.navigate('DsrMantraScreen')}>
    <Text style={{fontWeight:'bold',color:'#fff'}}>Submit</Text>
    
    </TouchableOpacity>
   
    </View>
  )
}

export default OutletImgScreen

const styles = StyleSheet.create({})