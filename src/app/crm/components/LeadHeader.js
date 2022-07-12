import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LeadHeader = () => {
  return (
    <View>
      <View style={{
        height:50,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
      
        
      }}>
      <TouchableOpacity style={{
        
        
       marginLeft:5,
        alignItems:'center',
        justifyContent:'center',
        
        flexDirection:'row',
        marginTop:15
      }}>
      <FontAwesome name='home' size={20} color='#000' />
      <Text style={{color:'#000',fontSize:20,fontSize:16,marginLeft:10}}>Home</Text>
      </TouchableOpacity>
      <MaterialIcons style={{marginTop:15}} name='keyboard-arrow-right' size={30} color='#000' />
      <TouchableOpacity style={{
      
       
       marginLeft:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        flexDirection:'row',
        marginTop:15
      }}>
     
      <Text style={{color:'#fff',fontSize:20,fontSize:16,color:'#000'}}>Lead Details</Text>
      </TouchableOpacity>
      <MaterialIcons  style={{marginTop:15}}  name='keyboard-arrow-right' size={30} color='#000' />
      <TouchableOpacity style={{
       
      
       marginLeft:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        flexDirection:'row',
        marginTop:15
      }}>
     
      <Text style={{color:'#fff',fontSize:20,fontSize:16,color:'#000'}}>Add Leads</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default LeadHeader

const styles = StyleSheet.create({})