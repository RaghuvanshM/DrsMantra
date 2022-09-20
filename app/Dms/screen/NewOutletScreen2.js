import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OutletHeader2 from '../components/OutletHeader2'

const NewOutletScreen2 = ({navigation}) => {
  return (
    <View>
      <OutletHeader2 />
      <ScrollView style={{padding:7}}>
      <Text style={{color:'#18f1f5',marginTop:10,fontWeight:'bold'}}>Outlet Profile</Text>
      <Text style={{fontWeight:'bold'}}>Channel*</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }}>
     <Text style={{marginLeft:20,}}>GT</Text>
      <AntDesign style={{marginRight:20}} name='down' size={20} color='#b4b8b8' />
      
      </View>
      <Text style={{fontWeight:'bold'}}>Outlets Type*</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }}>
     <Text style={{marginLeft:20,}}>wholesale Counter</Text>
      <AntDesign style={{marginRight:20}} name='down' size={20} color='#b4b8b8' />
      
      </View>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#0bcde3',
        marginTop:'90%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

      }} onPress={()=>navigation.navigate('NewOutletScreen3')}>
        
      <Text style={{fontWeight:'bold'}}>FILL REQUIRED FIELD FIRST</Text>
      <AntDesign name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NewOutletScreen2

const styles = StyleSheet.create({})