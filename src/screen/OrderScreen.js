import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import OrderHeader from '../components/OrderHeader'

const OrderScreen = ({navigation}) => {
  return (
    <View>
      <OrderHeader />
      <TouchableOpacity style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text style={{fontWeight:'bold',color:'#2347e8'}}>Outlets</Text>
      <Text style={{fontWeight:'bold'}}>Distributors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#9ff5ac',
        marginTop:40,
        elevation:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

      }}>
      <Text style={{fontWeight:'bold',fontSize:15}}>Mohan</Text>
      <AntDesign name='check' size={30} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#9ff5ac',
        
        elevation:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

      }}>
      <Text style={{fontWeight:'bold',fontSize:15}}>Vikas</Text>
      <AntDesign name='check' size={30} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#9ff5ac',
    
        elevation:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

      }}>
      <Text style={{fontWeight:'bold',fontSize:15}}>Rahul Kumar</Text>
      <AntDesign name='check' size={30} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#9ff5ac',
  
        elevation:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

      }}>
      <Text style={{fontWeight:'bold',fontSize:15}}>Jyoti Shukla</Text>
      <AntDesign name='check' size={30} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#1c8dd9',
        marginTop:"50%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }} onPress={()=>navigation.navigate('PendingRequestScreen')}>
      <Text style={{fontWeight:'bold',color:'#fff'}}>SHARE ON WHATSAPP</Text>
      <FontAwesome style={{marginLeft:10}} name='whatsapp' size={30} color='#fff' />
      
      </TouchableOpacity>
      
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})