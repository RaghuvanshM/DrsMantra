import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

import CnfHeader from '../components/CnfHeader'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

const ConfirmationScreen = ({navigation}) => {
  return (
    <View>
      <CnfHeader/>
        <ScrollView style={{padding:5}}>
        <View style={{
            height:50,
            width:'100%',
            backgroundColor:'#f5e0d7',
            flexDirection:'row',
            alignItems:'center'
        }}>
        <Text style={{marginLeft:5}}>Confirmation order</Text>
        <Text style={{marginLeft:100}}>₹ 50,459</Text>
        
      </View>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#c6f5e7',
        flexDirection:'row',
        alignItems:'center'
      }}>
      <Text style={{marginLeft:5}}>Transaction order</Text>
        <Text style={{marginLeft:100}}>₹ 32,459</Text>
     </View>
     <View style={{
      flexDirection:'row',
      alignItems:'center',
      
     }}>
     <Text style={{marginLeft:10}}>Aloo Bhujia 400GM |14PCS</Text>
     <Entypo style={{
      marginLeft:90,
     }} name='cross' size={25} color='#de705d' />
     </View>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10
     }}>
     <Text>MRP</Text>
     <Text>₹ 4,809</Text>
     <View style={{
      height:30,
      width:100,
      backgroundColor:'#cee9f2',
      borderRadius:20,
     
      alignItems:'center',
      flexDirection:'row'
     
     }}>
     <Text style={{marginLeft:10}}>2Captan</Text>
     <View style={{height:20,width:20,backgroundColor:'#f2cef2', borderRadius:10,marginLeft:5}}>
     </View>
     </View>
     <Text style={{fontWeight:'bold'}}>₹8,898</Text>
     </View>
     <View style={{
      flexDirection:'row',
      alignItems:'center',
      
     }}>
     <Text style={{marginLeft:10}}>Aloo Bhujia 400GM |14PCS</Text>
     <Entypo style={{
      marginLeft:90,
     }} name='cross' size={25} color='#de705d' />
     </View>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10
     }}>
     <Text>MRP</Text>
     <Text>₹ 4,809</Text>
     <View style={{
      height:30,
      width:100,
      backgroundColor:'#cee9f2',
      borderRadius:20,
     
      alignItems:'center',
      flexDirection:'row'
     
     }}>
     <Text style={{marginLeft:10}}>2Captan</Text>
     <View style={{height:20,width:20,backgroundColor:'#f2cef2', borderRadius:10,marginLeft:5}}>
     </View>
     </View>
     <Text style={{fontWeight:'bold'}}>₹8,898</Text>
     </View>
     <View style={{
      flexDirection:'row',
      alignItems:'center',
      
     }}>
     <Text style={{marginLeft:10}}>Aloo Bhujia 400GM |14PCS</Text>
     <Entypo style={{
      marginLeft:90,
     }} name='cross' size={25} color='#de705d' />
     </View>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10
     }}>
     <Text>MRP</Text>
     <Text>₹ 4,809</Text>
     <View style={{
      height:30,
      width:100,
      backgroundColor:'#cee9f2',
      borderRadius:20,
     
      alignItems:'center',
      flexDirection:'row'
     
     }}>
     <Text style={{marginLeft:10}}>2Captan</Text>
     <View style={{height:20,width:20,backgroundColor:'#f2cef2', borderRadius:10,marginLeft:5}}>
     </View>
     </View>
     <Text style={{fontWeight:'bold'}}>₹8,898</Text>
     </View>
     <View style={{
      flexDirection:'row',
      alignItems:'center',
      
     }}>
     <Text style={{marginLeft:10}}>Aloo Bhujia 400GM |14PCS</Text>
     <Entypo style={{
      marginLeft:90,
     }} name='cross' size={25} color='#de705d' />
     </View>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10
     }}>
     <Text>MRP</Text>
     <Text>₹ 4,809</Text>
     <View style={{
      height:30,
      width:100,
      backgroundColor:'#cee9f2',
      borderRadius:20,
     
      alignItems:'center',
      flexDirection:'row'
     
     }}>
     <Text style={{marginLeft:10}}>2Captan</Text>
     <View style={{height:20,width:20,backgroundColor:'#f2cef2', borderRadius:10,marginLeft:5}}>
     </View>
     </View>
     <Text style={{fontWeight:'bold'}}>₹8,898</Text>
     </View>
     <TouchableOpacity style={{
      height:40,
      width:'100%',
      backgroundColor:'#f2db27',
      marginTop:5,
      alignItems:'center',
      justifyContent:'center'
     }}>
     <Text style={{fontWeight:'bold'}}>From Details of Stores</Text>
    </TouchableOpacity>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:5
    }}>
    <Text>Sub Total</Text>
    <Feather name='arrow-up-left' size={18} />
    <Text>₹ 8,5004</Text>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:7
    }}>
    <Text style={{color:'#fc5a3a'}}>(1)DISCOUNT</Text>
    <Feather name='arrow-up-left' size={18} />
    <View style={{height:20,width:90,borderBottomWidth:1,backgroundColor:'#97fce7'}}>
    </View>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
    }}>
    <Text>Total</Text>
    <Feather style={{marginLeft:15}} name='arrow-right' size={20} />
    <Text>₹9,800</Text>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:5
    }}>
    <Text>Sub Total</Text>
    <Feather name='arrow-up-left' size={18} />
    <Text>₹ 8,5004</Text>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:7
    }}>
    <Text style={{color:'#fc5a3a'}}>(2)CASHDISCOUNT</Text>
    <Feather name='arrow-up-left' size={18} />
    <View style={{height:20,width:90,borderBottomWidth:1,backgroundColor:'#97fce7'}}>
    </View>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
    }}>
    <Text>NET AMOUNT</Text>
    <Feather  name='arrow-right' size={20} />
    <Text>₹29,800</Text>
    </View>
    <TouchableOpacity style={{
      height:40,
      width:'100%',
      marginTop:10,
      backgroundColor:'#68f26d',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    }} onPress={()=>navigation.navigate('OrderCnfScreen')} >
    <Text style={{fontWeight:'bold'}}>CONFIRM</Text>
    <Feather name='arrow-right' size={20} color='#f268e9'/>
    </TouchableOpacity>
    
      </ScrollView>
    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})