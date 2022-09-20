import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import CnfHeader from '../components/CnfHeader'
import Entypo  from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
const OrderCnfScreen = ({navigation}) => {
  return (
    <View>
     <CnfHeader />
     <ScrollView style={{padding:5}}>
     
     <View style={{
        flexDirection:'row',
        marginTop:20,
        marginLeft:10
     }}>
     <Text >SALTED PENUT NAMAK20/60P.S PEANUT</Text>
     <Entypo style={{marginLeft:5}} name='cross' size={25} color='#fc031c' />
     </View>
     <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
     }}>
     <Text>PTR</Text>
     <Text>₹16</Text>
     <View style={{height:20,width:70,
     backgroundColor:'#bbfaf6',
     borderRadius:10,
     justifyContent:'center',
    alignItems:'center',marginTop:5}}>
     <Text>5LADI</Text>
     </View>
     <Text>₹84</Text>
     </View>
     <View style={{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10
     }}>
     <Text >SALTED PENUT NAMAK20/60P.S PEANUT</Text>
     <Entypo style={{marginLeft:5}} name='cross' size={25} color='#fc031c' />
     </View>
     <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
     }}>
     <Text>PTR</Text>
     <Text>₹16</Text>
     <View style={{height:20,width:70,
     backgroundColor:'#bbfaf6',
     borderRadius:10,
     justifyContent:'center',
    alignItems:'center',marginTop:5}}>
     <Text>5LADI</Text>
     </View>
     <Text>₹84</Text>
     </View>
        <TouchableOpacity style={{
            height:40,
            width:'100%',
            backgroundColor:'#edcb0c',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
        }}>
        <Text style={{fontWeight:'bold'}}>FINAL DISCOUNT AND SCHEME</Text>
        </TouchableOpacity>
        <View style={{
         flexDirection:'row',
         justifyContent:'space-around',
         marginTop:10       }}>
       <Text style={{fontWeight:'bold'}}>SUB-TOTAL</Text>
       <Text style={{fontWeight:'bold'}}>₹</Text>
       <Text style={{fontWeight:'bold'}}>340</Text>
       </View>
       <View style={{
         flexDirection:'row',
         justifyContent:'space-around',
         marginTop:10       }}>
       <Text style={{fontWeight:'bold'}}>SUB-TOTAL</Text>
       <Text style={{fontWeight:'bold'}}>₹</Text>
       <Text style={{fontWeight:'bold'}}>340</Text>
       </View>
       <View style={{
         flexDirection:'row',
         
         marginTop:10       }}>
       <Text style={{fontWeight:'bold',marginLeft:35}}>TOTAL</Text>
       <Text style={{fontWeight:'bold',marginLeft:110}}>₹</Text>
       <Text style={{fontWeight:'bold',marginLeft:80}}>340</Text>
       </View>
       <View style={{
         flexDirection:'row',
        
         marginTop:10,
         borderBottomWidth:0.5
      }}>
       <Text style={{fontWeight:'bold',marginLeft:30}}>NET AMOUNT </Text>
       <Text style={{fontWeight:'bold',marginLeft:50}}>₹</Text>
       <Text style={{fontWeight:'bold',marginLeft:80}}>340</Text>
       </View>
      
       <View style={{
         flexDirection:'row',
         
         marginTop:15
       }}>
       <Text style={{marginLeft:25,fontWeight:'bold',color:'#26f059'}}>PAYBALE AMOUNT</Text>
       <Text style={{marginLeft:30,fontWeight:'bold'}}>₹</Text>
       <Text style={{marginLeft:75,fontWeight:'bold'}}>340</Text>
       </View>
       <TouchableOpacity style={{
         height:40,
         width:'100%',
         marginTop:40,
         backgroundColor:'#e626f0',
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row'
       }} onPress={()=>navigation.navigate('MapScreen')}>
       <Text style={{fontWeight:'bold',color:'#fff'}}>CONFIRM</Text>
       <AntDesign name='arrowright'size={25} color='#fff' />
       </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default OrderCnfScreen

const styles = StyleSheet.create({})