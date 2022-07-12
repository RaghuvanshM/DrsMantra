import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeScreenCrm = ({navigation}) => {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#030b54',
      
    }}>
    
    <View style={{
      flexDirection:'row',
      padding:15,
      justifyContent:'space-around'
  
    }}>
    <TouchableOpacity>
    <Image  style={{height:100,width:100}} source={require('../../../assets/logo.png')} />
    </TouchableOpacity>
    
    <TouchableOpacity style={{
      height:50,
      width:80,
      backgroundColor:'#cc480a',
     marginLeft:30,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      flexDirection:'row',
      marginTop:15
    }}>
    <FontAwesome name='home' size={20} color='#fff' />
    <Text style={{color:'#fff',fontSize:20,fontSize:16}}>Home</Text>
    </TouchableOpacity>
   
    </View>
    
     <View style={{
      height:'60%',
      width:'80%',
      backgroundColor:'#fff',
      alignSelf:'center',
      marginTop:30,
      borderRadius:10
     }}>
     <Text style={{
      alignSelf:'center',
      marginTop:20,
      fontWeight:'bold',
      fontSize:17
    }}>Admin Login</Text>
     <View >
     <Text style={{padding:15,fontWeight:'bold'}}>UserName</Text>
     <TextInput style={{
      borderWidth:1,
      width:'90%',
      alignSelf:'center',
      borderColor:'#f5a351',
      borderRadius:10
    }} placeholder='UserName' />
     </View>
     <View >
     <Text style={{padding:15,fontWeight:'bold'}}>Password</Text>
     <TextInput style={{
      borderWidth:1,
      width:'90%',
      alignSelf:'center',
      borderColor:'#f5a351',
      borderRadius:10
    }} placeholder='Password' />
     </View>
      <TouchableOpacity style={{
        height:60,
        width:'90%',
        backgroundColor:'#cc2e0a',
        alignSelf:'center',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
      }} onPress={()=>navigation.navigate('LeadScreen')} >
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Submit</Text>
      
      </TouchableOpacity>
      <View style={{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:3
      }}>
      <Text style={{fontSize:15, fontWeight:'bold'}}>Don't have an account?</Text>
      
      <TouchableOpacity style={{
        
      }}>
      <Text style={{fontWeight:'bold',fontSize:15,color:'#0aa8cc'}}>Sign Up</Text>
      
      </TouchableOpacity>
      
      </View>
      
     </View>
     
    </View>
  )
}

export default HomeScreenCrm

const styles = StyleSheet.create({})