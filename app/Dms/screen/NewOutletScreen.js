import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import OutletHeader from '../components/OutletHeader'

const NewOutletScreen = ({navigation}) => {
  return (
    <View>
      <OutletHeader />
      
      <ScrollView style={{padding:10}}>
      <Text style={{color:'#fc1928',marginLeft:10,marginTop:10}}> Required</Text>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#b5b0b0',
        borderBottomWidth:1,
        marginTop:10
      }}>
      
       <TextInput placeholder='name*' />
      </View>
      <Text style={{color:'#fc1928',marginLeft:10,marginTop:10}}> Required</Text>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#b5b0b0',
        borderBottomWidth:1,
        marginTop:10
      }}>
      
       <TextInput placeholder='phone Number*' />
      </View>
      <Text style={{color:'#fc1928',marginLeft:10,marginTop:10}}> Required</Text>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#b5b0b0',
        borderBottomWidth:1,
        marginTop:10
      }}>
      
       <TextInput placeholder='Email*' />
      </View>
      <Text style={{marginTop:10,color:'#0bd1e3',fontWeight:'bold',fontSize:18}}>Tex Details</Text>
      <Text style={{marginTop:10,color:'#000',fontWeight:'bold',fontSize:15}}>GST Required</Text>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#b5b0b0',
        borderBottomWidth:1,
        marginTop:60
      }}>
      <TextInput placeholder='GST Number' />
       
      </View>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#0bcde3',
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

      }} onPress={()=>navigation.navigate('NewOutletScreen1')} >
        
      <Text style={{fontWeight:'bold'}}>FILL OUTLETS PROFILE</Text>
      <AntDesign name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NewOutletScreen

const styles = StyleSheet.create({})