import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OutletHeader from '../components/OutletHeader'

const NewOutletScreen1 = ({navigation}) => {
  return (
    <View>
      <OutletHeader />
    <ScrollView style={{padding:10}}>
    <Text style={{fontWeight:'bold',color:'#2de7eb'}}>Adding to Beat</Text>
    <Text style={{fontWeight:'bold',}}>AJNALA</Text>
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
    
     <TextInput placeholder='name*' />
    </View>
    <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#0bcde3',
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

      }} onPress={()=>navigation.navigate('NewOutletScreen2')}>
        
      <Text style={{fontWeight:'bold'}}>FILL REQUIRED FIELD FIRST</Text>
      <AntDesign name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default NewOutletScreen1

const styles = StyleSheet.create({})