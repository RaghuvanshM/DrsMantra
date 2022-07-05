import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
const OutScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <ScrollView style={{padding:5}}>
    <View style={{
      
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Image style={{
      height:200,
      width:150
    }}
     source={require('../../assets/key.jpeg')} />
    </View>
    <View style={{
      flexDirection:'row',
      marginTop:20,
      marginLeft:40,
      }}>
      
    <TouchableOpacity style={{
      height:35,
      width:80,
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Text style={{
      fontSize:15,
      color:'#fff',
      fontWeight:'bold'
    }}>My Sales</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{
      height:35,
      width:120,
     
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#50617d',
    
    }}>
    <Text style={{
      fontSize:15,
      fontWeight:'bold',
      color:'#fff'
    }}>Outlet Sales</Text>
    </TouchableOpacity>
    
    </View>
    <Text style={{
      marginTop:10,
      fontWeight:'bold',
      marginLeft:5
    }}>(NID)</Text>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      borderBottomWidth:1,
      marginTop:20
    }}>
    <View>
    <Text style={{marginLeft:60}}>₹0</Text>
    <Text style={{marginTop:10}}>TOTAL SALE VALUE</Text>
    </View>
    <View>
    <Text style={{marginLeft:60}}>₹0</Text>
    <Text style={{marginTop:10}}>TOTAL SALE VALUE</Text>
    </View>
     </View>
    <Text style={{marginTop:20,fontWeight:'bold'}}>(History)</Text>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      borderBottomWidth:1,
      marginTop:30
    }}>
    <View>
    <Text style={{marginLeft:30}}>₹5,698</Text>
    <Text style={{marginTop:10}}>TOTAL SALE </Text>
    </View>
    <View>
    <Text style={{marginLeft:30}}>₹0</Text>
    <Text style={{marginTop:10}}>TOTAL SALE</Text>
    </View>
    <View>
    <Text style={{marginLeft:10}}>1</Text>
    <Text style={{marginTop:5}}>LPC</Text>
    </View>
     </View>
     <View style={{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:30
     }}>
     <View>
     <Text>348 days ago</Text>
     <Text>Last Visit</Text>
     </View>
    <View>
    <Text>348 days ago</Text>
    <Text>Last Visit</Text>
    </View>
     </View>
     <View style={{
      height:70,
      width:'100%',
      backgroundColor:'#b6f2e7',
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
      }}>
      <View>
      <Image style={{height:40,width:40,marginLeft:20}}
     source={require('../../assets/watch.png')} />
     <Text>Last 10 Visit</Text>
      </View>
     
     <View>
      <FontAwesome style={{marginLeft:40}}
      name='file-text-o' size={40} color='#1855f0' />
      <Text>last 10 days data</Text>
     </View>
     </View>
     <TouchableOpacity style={{
          height:50,
          width:'100%',
          backgroundColor:'#7598f0',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
        }} onPress={()=>navigation.navigate('RetailerOrderScreen')} >
     <Text style={{fontWeight:'bold',color:'#fff'}}>BEGIN VISI</Text>
     <AntDesign name='arrowright' size={30} color="#fff" />
     </TouchableOpacity>
     </ScrollView>
    </View>
  )
}

export default OutScreen

const styles = StyleSheet.create({})