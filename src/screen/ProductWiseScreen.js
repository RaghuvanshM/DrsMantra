import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import ProductWiseHeader from '../components/ProductWiseHeader'

const ProductWiseScreen = ({navigation}) => {
  return (
    <View>
      <ProductWiseHeader />
      <View style={{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-around'
      }}>
      <TouchableOpacity style={{
        height:50,
        width:80,
        backgroundColor:'#0e43e3',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text style={{color:'#fff'}}>MTD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:120,
        borderWidth:1,
        borderColor:"#0e43e3",
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text>Last Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:140,
        backgroundColor:'#8eedbe',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text style={{fontWeight:'bold'}}>Custom Date</Text>
      </TouchableOpacity>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40
      }}>
      <Text>7</Text>
      <Text>10</Text>
      <Text>8</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>sc</Text>
      <Text style={{marginLeft:15}}>1c</Text>
      <Text >cap</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>₹5,22,014</Text>
      <Text>101.84</Text>
      <Text>8</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>NET VALUE</Text>
      <Text style={{marginLeft:15}}>QTY(STD UNIT) </Text>
      <Text >LPC</Text>
      </View>
      <View style={{
        flexDirection:'row',
       justifyContent:'space-between',
        marginTop:20,
        borderBottomWidth:0.5,
        width:'90%',
        alignSelf:'center'

      }}>
      <TouchableOpacity style={{
        height:35,
        width:90,
        backgroundColor:'#1b6ef5',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:2
      }} onPress={()=>navigation.navigate('OrderScreen')} >
      <Text style={{color:'#fff'}}>PRIMARY</Text>
      </TouchableOpacity>
      
      <Text>SECONDARY</Text>
      <Text>SKU</Text>
      
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>Value</Text>
      <Text>Qty(Unit) </Text>
      <Text>Qty(std unit)</Text>
      
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30
      }}>
      <Text>Value</Text>
      <Text>Qty(Unit) </Text>
      <Text>Qty(Std Unit) </Text>
      </View>
      <Text style={{marginTop:20,marginLeft:5,color:'#2e7eff',fontWeight:'bold'}}>Bakery</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>₹230</Text>
      <Text>15pcs</Text>
      <Text>563 backs</Text>
      </View>
      <Text style={{marginTop:20,marginLeft:5,color:'#2e7eff',fontWeight:'bold'}}>Namkeen</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>₹5000</Text>
      <Text>155pcs</Text>
      <Text>563 backs</Text>
      </View>
      <Text style={{marginTop:20,marginLeft:5,color:'#2e7eff',fontWeight:'bold'}}>Rusk</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>₹5000</Text>
      <Text>155pcs</Text>
      <Text>563 backs</Text>
      </View>
      <Text style={{marginTop:20,marginLeft:5,color:'#2e7eff',fontWeight:'bold'}}>Snacks</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>₹5000</Text>
      <Text>155pcs</Text>
      <Text>563 backs</Text>
      </View>
    </View>
  )
}

export default ProductWiseScreen

const styles = StyleSheet.create({})