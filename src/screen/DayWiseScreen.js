import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import DayWiseHeader from '../components/DayWiseHeader'

const DayWiseScreen = () => {
  return (
    <View>
      <DayWiseHeader />
      <Text style={{marginLeft:15,fontWeight:'bold',color:'#0e15e3',marginTop:5}}>Today</Text>
      <View style={{
        height:120,
        width:'90%',
        borderWidth:1,
        marginTop:10,
        alignSelf:'center',
        flexDirection:'row',
      }}>
      <TouchableOpacity style={{
        height:50,
        width:100,
        backgroundColor:'#32ed45',
        alignSelf:'center',
        marginLeft:20
      }}>
      <Text  style={{fontSize:13,fontWeight:'bold', alignSelf:'center',color:'#fff'}}>Distributor Visit</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{
        height:50,
        width:190,
        backgroundColor:'#fff',
        alignSelf:'center',
        
      }}>
      <Text style={{fontSize:10,fontWeight:'bold', alignSelf:'center',marginTop:15}}>KRISHNA TRADERS- KRISHNA</Text>
       </TouchableOpacity>
      </View>
      <Text style={{marginLeft:15,fontWeight:'bold',color:'#0e15e3',marginTop:5}}>04-july-2022</Text>
      <View style={{
        height:120,
        width:'90%',
        borderWidth:1,
        marginTop:10,
        alignSelf:'center',
        flexDirection:'row',
      }}>
      <TouchableOpacity style={{
        height:50,
        width:100,
        backgroundColor:'#e30e18',
        alignSelf:'center',
        marginLeft:20
      }}>
      <Text  style={{fontSize:13,fontWeight:'bold', alignSelf:'center',color:'#fff',alignSelf:'center'}}>AHert</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{
        height:50,
        width:190,
        backgroundColor:'#fff',
        alignSelf:'center',
        
      }}>
      <Text style={{fontSize:10,fontWeight:'bold', alignSelf:'center',marginTop:15}}>KRISHNA TRADERS- KRISHNA</Text>
       </TouchableOpacity>
      </View>
      <Text style={{marginLeft:15,fontWeight:'bold',color:'#0e15e3',marginTop:5}}>06-july-2022</Text>
      <View style={{
       
        
        marginTop:10,
        alignSelf:'center',
        flexDirection:'row',
      }}>
      <TouchableOpacity style={{
        height:50,
        width:100,
        backgroundColor:'#32ed45',
        marginTop:20,
        marginLeft:20
      }}>
      <Text  style={{fontSize:13,fontWeight:'bold', alignSelf:'center',color:'#fff'}}>Distributor Visit</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{
        height:50,
        width:190,
        backgroundColor:'#fff',
        marginTop:20
        
      }}>
      <Text style={{fontSize:10,fontWeight:'bold', alignSelf:'center',marginTop:15}}>KRISHNA TRADERS- KRISHNA</Text>
      
       </TouchableOpacity>
       
      </View>
      <View style={{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text style={{fontWeight:'bold'}}>07:27Am</Text>
      <Text style={{fontWeight:'bold'}}>07:27Am</Text>
      <Text style={{fontWeight:'bold'}}>07:27Am</Text>
      </View>
      <View style={{
       
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text >scd</Text>
      <Text>abc</Text>
      <Text >bpc</Text>
      </View>
      <View style={{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text style={{fontWeight:'bold'}}>1</Text>
      <Text style={{fontWeight:'bold'}}>3</Text>
      <Text style={{fontWeight:'bold'}}>0</Text>
      </View>
      <View style={{
       
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text >scd</Text>
      <Text>abc</Text>
      <Text >bpc</Text>
      </View>
      
      
    </View>
  )
}

export default DayWiseScreen

const styles = StyleSheet.create({})