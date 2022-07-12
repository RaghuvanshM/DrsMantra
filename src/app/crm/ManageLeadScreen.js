import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const ManageLeadScreen = ({navigation}) => {
  return (
 
    <View style={{
        flex:1,
        backgroundColor:'#0a57d1'
    }}>
    <View style={{
      height:50,
      width:'100%',
      backgroundColor:'#fff'
    }}>
    <TouchableOpacity style={{
        marginLeft:7,
        marginTop:7,
        flexDirection:'row',

    }}>
    
    <Feather name='menu' size={30} color='red' />
    <Text style={{marginLeft:20, alignSelf:'center', fontWeight:'bold'}}>Manage Lead</Text>
    </TouchableOpacity>
     
    </View>
      <ScrollView style={{
        padding:7
      }}>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Views Assign Leads</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Manage Lead Status</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }} onPress={()=>navigation.navigate('LeadsScreen')}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Leads</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Sampling</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Display Auto Assign Leads</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Lead Industry</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Lead Rating</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Lead Source</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Manually Assign Lead</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:50,
      width:'90%',
      backgroundColor:'#75fae6',
      alignSelf:'center',
      marginTop:50,
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Add New Sampling</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default ManageLeadScreen

const styles = StyleSheet.create({})