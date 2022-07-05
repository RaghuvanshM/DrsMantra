import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import PerformanceHeader from '../components/PerformanceHeader'

const TimeLineSceen = ({navigation}) => {
  return (
    <View>
      <PerformanceHeader />
      <TouchableOpacity style={{
        
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        borderBottomWidth:0.3,
        width:'90%',
        alignSelf:'center'
      }}>
      <Text >Sales</Text>
      <Text style={{borderBottomWidth:2,color:'#4287f5',borderBottomColor:'#4287f5'}}>TIMELINE</Text>
      </TouchableOpacity>
      <View style={{
        marginTop:10,
        marginLeft:10
      }}>
      <Text>DSR START</Text>
      <Text>67am</Text>
      </View>
     <View style={{
        flexDirection:'row',
        borderBottomWidth:0.5,
        width:'90%',
        alignSelf:'center',
        marginTop:20
     }}>
     <TouchableOpacity style={{
        height:35,
        width:90,
        backgroundColor:'#48ff24',
       
        alignItems:'center',
        borderTopLeftRadius:5,
        
     }}>
     <Text>DayStart</Text>
     </TouchableOpacity>
    
     <Text style={{marginLeft:10}}>KRISHNA TRADERS-KHANNA</Text>
     </View>
     <Text style={{marginLeft:15,marginTop:20,color:'#3246a8',fontWeight:'bold'}}>Distributor Visit</Text>
     <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
     }}>
     <Text style={{marginLeft:20}}>06:55AM</Text>
     <Text style={{marginRight:20}}>1Min</Text>
     </View>
     <TouchableOpacity style={{
        height:50,
        width:'95%',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        marginTop:5,
        justifyContent:'center'
     }}>
     <Text style={{fontSize:13,fontWeight:'bold',marginLeft:10}}>COMMENTS</Text>
     <Text style={{fontSize:12,fontWeight:'bold',marginLeft:10}}>DISTRIBUTOR VISIT KRISHNA TRADERS-KHANNA</Text>
     </TouchableOpacity>
     <Text style={{marginLeft:15,marginTop:20,color:'#3246a8',fontWeight:'bold'}}>Head Office Visit</Text>
     <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
     }}>
     <Text style={{marginLeft:20}}>06:55AM</Text>
     <Text style={{marginRight:20}}>1Min</Text>
     </View>
     <TouchableOpacity style={{
        height:50,
        width:'95%',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        marginTop:5,
        justifyContent:'center'
     }}>
     <Text style={{fontSize:13,fontWeight:'bold',marginLeft:10}}>COMMENTS</Text>
     <Text style={{fontSize:12,fontWeight:'bold',marginLeft:10}}>DISTRIBUTOR VISIT KRISHNA TRADERS-KHANNA</Text>
     </TouchableOpacity>
     <Text style={{marginLeft:15,marginTop:20,color:'#3246a8',fontWeight:'bold'}}>Distributor Visit</Text>
     <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
     }}>
     <Text style={{marginLeft:20}}>06:55AM</Text>
     <Text style={{marginRight:20}}>1Min</Text>
     </View>
     <TouchableOpacity style={{
        height:50,
        width:'95%',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        marginTop:5,
        justifyContent:'center'
     }} onPress={()=>navigation.navigate('PocketMIS')} >
     <Text style={{fontSize:13,fontWeight:'bold',marginLeft:10}}>COMMENTS</Text>
     <Text style={{fontSize:12,fontWeight:'bold',marginLeft:10}}>DISTRIBUTOR VISIT KRISHNA TRADERS-KHANNA</Text>
     </TouchableOpacity>
    </View>
  )
}

export default TimeLineSceen

const styles = StyleSheet.create({})