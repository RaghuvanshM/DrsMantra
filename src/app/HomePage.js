
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomePage = ({navigation}) => {
  return (
    <ScrollView style={{padding:10}}  >
      <TouchableOpacity style={{
        height:50,width:'100%',
        backgroundColor:'#6db9e8',
        alignItems:'center',
        justifyContent:'center',
        marginTop:100,
        flexDirection:'row',
        borderRadius:5
      }} onPress={()=>navigation.navigate('HomeScreenCrm')}>
      
      <Text style={{color:'#000', fontWeight:'bold'}}>CRM</Text>
      <AntDesign style={{ marginLeft:20}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,width:'100%',
        backgroundColor:'#6db9e8',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        flexDirection:'row',
        borderRadius:5
      }} onPress={()=>navigation.navigate('HomeScreen')} >
      
      <Text style={{color:'#000', fontWeight:'bold'}}>DMS</Text>
      <AntDesign style={{ marginLeft:20}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,width:'100%',
        backgroundColor:'#6db9e8',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        flexDirection:'row',
        borderRadius:5
      }} >
      
      <Text style={{color:'#000', fontWeight:'bold'}}>RETAILER</Text>
      <AntDesign style={{ marginLeft:5}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,width:'100%',
        backgroundColor:'#6db9e8',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        flexDirection:'row',
        borderRadius:5
      }}>
      
      <Text style={{color:'#000', fontWeight:'bold'}}>SFA</Text>
      <AntDesign style={{ marginLeft:20}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      
    </ScrollView>
  )
}

export default HomePage

const styles = StyleSheet.create({})