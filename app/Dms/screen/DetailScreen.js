import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RetailHeader from '../components/RetailHeader'


const DetailScreen = ({navigation}) => {
  return (
    <View>
     <RetailHeader />
     <View style={{
      height:40,
      width:'100%',
      backgroundColor:'#19fcf9',
      flexDirection:'row',
      justifyContent:'space-around'
     }}>
     <Text>BAKERY</Text>
     <Text>NAMKEEN</Text>
     <Text>RUSK</Text>
     <Text>SNACKS</Text>
     </View>
     <ScrollView style={{padding:10}}>
     <Text style={{
        fontWeight:'bold',
        marginTop:3
     }}>ATTA COOKIES 150GM</Text>
     <View style={{
        flexDirection:'row',
        marginTop:20

     }}>
     <Text>Price</Text>
     <View style={{
        height:30,
        width:60,
        borderWidth:1,
        borderColor:'#c036eb',
        elevation:3,
        marginLeft:10
     }}>
     <Text>₹48.00</Text>
     </View>
     <Image  style={{height:30,width:30,marginLeft:20}}
     source={require('../../../assets/watch.png')} />
     <View style={{height:40,width:70,marginLeft:15,
        backgroundColor:'#eb3693'
     }}>
     </View>
     <View style={{height:40,width:90,marginLeft:15,
        backgroundColor:'#eb3693'
     }} >
     </View>
     </View>
     <View style={{
       flexDirection:'row'
     }}>
     <Text>Price ₹ 49.00</Text>
     <Text style={{marginLeft:85}}>captan</Text>
     <Text style={{marginLeft:50}}>cspc</Text>
     </View>
     <Text style={{
        fontWeight:'bold',
        marginTop:20
     }}>JAM COOKES 150GM</Text>
     <View style={{
        flexDirection:'row',
        marginTop:20

     }}>
     <Text>Price</Text>
     <View style={{
        height:30,
        width:60,
        borderWidth:1,
        borderColor:'#c036eb',
        elevation:3,
        marginLeft:10
     }}>
     <Text>₹48.00</Text>
     </View>
     <Image  style={{height:30,width:30,marginLeft:20}}
     source={require('../../../assets/watch.png')} />
     <View style={{height:40,width:70,marginLeft:15,
        backgroundColor:'#eb3693'
     }}>
     </View>
     <View style={{height:40,width:90,marginLeft:15,
        backgroundColor:'#eb3693'
     }} >
     </View>
     </View>
     <View style={{
       flexDirection:'row'
     }}>
     <Text>Price ₹ 49.00</Text>
     <Text style={{marginLeft:85}}>captan</Text>
     <Text style={{marginLeft:50}}>cspc</Text>
     </View>
     <Text style={{
        fontWeight:'bold',
        marginTop:20
     }}>COCONUT COOKIES 150GM</Text>
     <View style={{
        flexDirection:'row',
        marginTop:20

     }}>
     <Text>Price</Text>
     <View style={{
        height:30,
        width:60,
        borderWidth:1,
        borderColor:'#c036eb',
        elevation:3,
        marginLeft:10
     }}>
     <Text>₹48.00</Text>
     </View>
     <Image  style={{height:30,width:30,marginLeft:20}}
     source={require('../../../assets/watch.png')} />
     <View style={{height:40,width:70,marginLeft:15,
        backgroundColor:'#eb3693'
     }}>
     </View>
     <View style={{height:40,width:90,marginLeft:15,
        backgroundColor:'#eb3693'
     }} >
     </View>
     </View>
     <View style={{
       flexDirection:'row'
     }}>
     <Text>Price ₹ 49.00</Text>
     <Text style={{marginLeft:85}}>captan</Text>
     <Text style={{marginLeft:50}}>cspc</Text>
     </View>
     
     <Text style={{
        fontWeight:'bold',
        marginTop:20
     }}>SWEET JALEBI COOKIES</Text>
     <View style={{
        flexDirection:'row',
        marginTop:20

     }}>
     <Text>Price</Text>
     <View style={{
        height:30,
        width:60,
        borderWidth:1,
        borderColor:'#c036eb',
        elevation:3,
        marginLeft:10
     }}>
     <Text>₹48.00</Text>
     </View>
     <Image  style={{height:30,width:30,marginLeft:20}}
     source={require('../../../assets/watch.png')} />
     <View style={{height:40,width:70,marginLeft:15,
        backgroundColor:'#eb3693'
     }}>
     </View>
     <View style={{height:40,width:90,marginLeft:15,
        backgroundColor:'#eb3693'
     }} >
     </View>
     </View>
     <View style={{
       flexDirection:'row'
     }}>
     <Text>Price ₹ 49.00</Text>
     <Text style={{marginLeft:85}}>captan</Text>
     <Text style={{marginLeft:50}}>cspc</Text>
     </View>
     
     <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#d92742',
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
     }} onPress={()=>navigation.navigate('NewOutletScreen')}>
     <Text style={{fontWeight:'bold',color:'#fff'}}>NEXT</Text>
     <AntDesign name='arrowright' size={30} color='#fff'/>
     </TouchableOpacity>
     </ScrollView>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})