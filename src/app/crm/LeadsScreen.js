import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import LeadHeader from './components/LeadHeader'

const LeadsScreen = () => {
  return (
    <View>
      <LeadHeader />
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        borderTopWidth:1,
        borderColor:'#d3dbda'
      }}>
      <Text>From</Text>
      <Text>To</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
      }}>
       <TextInput style={{borderWidth:1,height:40,width:150}} placeholder='' />
       <TextInput style={{borderWidth:1,height:40,width:150}} placeholder='' />
      </View>
      <TouchableOpacity>
      
      <Text style={{marginTop:20,fontWeight:'bold',marginLeft:10}}>Add New Leads</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={{
        height:10,
        width:'100%',
        backgroundColor:'#d9edf7',
        marginTop:10
      }}>
      
      </TouchableOpacity>
      <View style={{
        height:70,
        width:'100%',
        backgroundColor:'#020f3d',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
      }}>
      <Text style={{color:'#fff', fontWeight:'bold', marginLeft:10}}>Display</Text>
      <TouchableOpacity style={{
        height:30,
        width:50,
        backgroundColor:'#fff',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Text style={{fontWeight:'bold'}}>All</Text>
     
      </TouchableOpacity>
      <Text style={{fontWeight:'bold',color:'#fff',marginLeft:10}}>records</Text>
      <View style={{
        flexDirection:'row',
        marginLeft:150,
        alignItems:'center'

      }}>
      <Text style={{color:'#fff',fontWeight:'bold'}}>Search:</Text>
      <TextInput style={{borderWidth:1,height:40,width:140,backgroundColor:'#fff',marginLeft:7,borderColor:'red'}} placeholder='' />
      </View>
      </View>
    </View>
  )
}

export default LeadsScreen

const styles = StyleSheet.create({})