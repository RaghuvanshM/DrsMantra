import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign  from 'react-native-vector-icons/AntDesign'
import OutletHeader4 from '../components/OutletHeader4'

const NewOutletScreen4 = ({navigation}) => {
  return (
    <View style={{padding:10}}>
      <OutletHeader4 />
     
      
     
      <TouchableOpacity style={{
        height:'55%',
        width:'70%',
        backgroundColor:'#000',
        alignSelf:'center',
        marginTop:10
      }}>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginTop:30,
        marginLeft:50,
        flexDirection:'row'
      }}>
      <Entypo name='camera' size={70} color='#1bb0f5'/>
      <Text style={{marginLeft:20,marginTop:25,color:'#19b0f5'}}>OPEN CAMERA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:'#1bb0f5',
        height:50,
        width:'100%',
        marginTop:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }} onPress={()=>navigation.navigate('OutletImgScreen')}>
      <Text style={{fontWeight:'bold',color:'#fff'}}>PRIVIEW OUTLETS DETAILS</Text>
      <AntDesign style={{marginLeft:10}} name='arrowright' size={24} color='#fff' />
      </TouchableOpacity>
     
    </View>
  )
}

export default NewOutletScreen4

const styles = StyleSheet.create({})