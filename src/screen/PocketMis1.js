import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MisHeader from '../components/MisHeader'

const PocketMis1 = ({navigation}) => {
  return (
    <View>
      <MisHeader />
      <View style={{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
      }}>
      <Text>4</Text>
      <Text style={{color:'#ff242b'}}>0/13</Text>
      <Text>01:46</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>Visiting</Text>
      <Text >Leave/Absent</Text>
      <Text>Average Time</Text>
      </View>
      <View style={{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
      }}>
      <Text>0</Text>
      <Text style={{color:'#2448ff',fontWeight:'bold'}}>23</Text>
      <Text>16:46</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>Visiting</Text>
      <Text >Leave/Absent</Text>
      <Text>Average Time</Text>
      </View>
      <Text style={{marginTop:30,marginLeft:10,color:'#2432ff',fontWeight:'bold'}}>MTD</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
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
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>7</Text>
      <Text>10</Text>
      <Text>8</Text>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
      }}>
      <Text>sc</Text>
      <Text style={{marginLeft:15}}>1c</Text>
      <Text >cap</Text>
      </View>
      <Text style={{marginTop:30,marginLeft:10,color:'#2432ff',fontWeight:'bold'}}>AVARAGE</Text>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <Text>1</Text>
      <Text>5</Text>
      <Text>0</Text>
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
        justifyContent:'space-around',
        marginTop:20
      }} >
      <Text>5</Text>
      <Text>20</Text>
      <Text>0</Text >
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
      }}>
      <Text>sc</Text>
      <Text style={{marginLeft:15}}>Ave.productivity</Text>
      <Text >cap</Text>
      </View>
      <TouchableOpacity style={{
        height:50,
        width:'90%',
        backgroundColor:'#81c8d6',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:10
        
      }} onPress={()=>navigation.navigate('DayWiseScreen')}>
      <View style={{
        height:'100%',
        width:20,
        backgroundColor:'#3267ed',
        
      }}>
      
      </View>
      <Text style={{marginLeft:80,fontWeight:'bold',alignSelf:'center'}}>Day Wise Summery</Text>
      <AntDesign style={{marginLeft:50,fontWeight:'bold',alignSelf:'center'}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'90%',
        backgroundColor:'#81c8d6',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:20
        
      }} onPress={()=>navigation.navigate('ProductWiseScreen')}>
      <View style={{
        height:'100%',
        width:20,
        backgroundColor:'#3267ed',
        
      }} >
      
      </View>
      <Text style={{marginLeft:80,fontWeight:'bold',alignSelf:'center'}}>Product Wise sales</Text>
      <AntDesign style={{marginLeft:50,fontWeight:'bold',alignSelf:'center'}} name='arrowright' size={25} color='#000' />
      </TouchableOpacity>
      <View style={{
        height:50,
        width:'100%',
        backgroundColor:'#e6e7ed',
        marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row'
      }}>
     
      <Entypo style={{
        alignSelf:'center',
        
      }} name='share' size={35} color='#1220e3' />
      <TouchableOpacity style={{
        backgroundColor:'#1220e3',
        width:'50%',
        marginLeft:150,
        justifyContent:'center',
        alignItems:'center'
    }}>
    <Entypo name='share' size={35} color='#fff' />
      </TouchableOpacity>
      
      
      </View>
    </View>
  )
}

export default PocketMis1

const styles = StyleSheet.create({})