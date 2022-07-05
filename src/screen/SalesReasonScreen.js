import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SalesHeader from '../components/SalesHeader'

const SalesReasonScreen = ({navigation}) => {
  return (
    <View>
      <SalesHeader />
        
      <Text style={{fontWeight:'bold',fontSize:16}}>Which out of following best describe the reason for shop related issue??</Text>
      <ScrollView style={{}}>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
       
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:19}}>Key Person Not Available</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
     
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:19}}>Last Stock persent</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
       
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:19}}>Shop Closed</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
        
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:17}}>Direct Order Placed to Distributor</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
      
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:19}}>Payment/Credit Issue</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7,
       
      }}>
      <Text style={{marginLeft:20,fontWeight:'400', fontSize:19}}>New Shop/First Visit</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:80,
         height:60,
         width:'100%',
         backgroundColor:'#f54266',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
      }} onPress={()=>navigation.navigate('RetailingScreen')}  >
      <Text style={{marginLeft:20,fontWeight:'bold',color:'#fff'}}>NEXT</Text>
      <AntDesign name='arrowright' size={25} color='#fff' />
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default SalesReasonScreen

const styles = StyleSheet.create({})