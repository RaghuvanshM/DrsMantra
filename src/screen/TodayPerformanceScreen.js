import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PerformanceHeader from '../components/PerformanceHeader'

const TodayPerformanceScreen = ({navigation}) => {
  return (
    <View>
      <PerformanceHeader />
      <ScrollView style={{padding:10}}>
      
     
      <TouchableOpacity style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        borderBottomWidth:0.3
      }}>
      <Text style={{borderBottomWidth:2,color:'#4287f5',borderBottomColor:'#4287f5'}}>Sales</Text>
      <Text onPress={()=>navigation.navigate('TimeLineSceen')}>TIMELINE</Text>
      </TouchableOpacity>
      <View style={{
        
       
       
        
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30,
       
      }}> 
      <Text>o</Text>
      <Text>4</Text>
      <Text>3</Text>
     
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>AG</Text>
      <Text>BG</Text>
      <Text>PG</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
      }}>
      <Text>51,680</Text>
      <Text>5,82</Text>
      <Text>2</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>NET VALUE</Text>
      <Text>QTY(STD UNIT)</Text>
      <Text>LPG</Text>
      </View>
      </ScrollView>
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
      }}>
      <Text style={{color:'#fff'}}>PRIMARY</Text>
      </TouchableOpacity>
      
      <Text>SECONDARY</Text>
      <Text>SKU</Text>
      
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
    </View>
  )
}

export default TodayPerformanceScreen

const styles = StyleSheet.create({})