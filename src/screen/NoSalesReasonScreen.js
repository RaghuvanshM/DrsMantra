import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import SalesHeader from '../components/SalesHeader'

const NoSalesReasonScreen = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View>
      <SalesHeader />
      <ScrollView style={{padding:7}}>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>PRODUCT RELATED ISSUE</Text>
      

      
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>DISTRIBUTOR RELATED ISSUE</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>COMPANY RELATED ISSUE</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>COMPETITOR RELATED ISSUE</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>SHOP RELATED ISSUE</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:20,
        borderBottomWidth:1,
        padding:7
      }}>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>MORE FACTORS</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{
        marginTop:80,
         height:60,
         width:'100%',
         backgroundColor:'#f54266',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
      }} onPress={()=>navigation.navigate('SalesReasonScreen')} >
      <Text style={{marginLeft:20,fontWeight:'bold',color:'#fff'}}>NEXT</Text>
      <AntDesign name='arrowright' size={25} color='#fff' />
      </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

export default NoSalesReasonScreen

const styles = StyleSheet.create({})