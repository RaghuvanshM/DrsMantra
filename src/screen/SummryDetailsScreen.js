import React from 'react'
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import HeaderScreen3 from '../components/HeaderScreen3'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SummryDetailsScreen = () => {
  return (
    <View>
      <HeaderScreen3 />
      <View style={styles.container}>
      <TextInput style={{marginLeft:10}} placeholder='Enter Beat Name Here' />
      </View>
      <ScrollView>
    
      <TouchableOpacity style={styles.tables}>
      <TouchableOpacity style={styles.btn}>
      <Text style={{fontSize:12,color:'#fff', fontWeight:'bold'}}>SELECTED</Text>
      </TouchableOpacity>
      <Text style={{fontWeight:'bold'}}>AJNALA </Text>
      <Text>MAHADEV TRADING COMPANY </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tables}>
      <Text style={{fontWeight:'bold'}}>LUCKNOW </Text>
      <Text>MISHRA TRADING COMPANY </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tables}>
      <Text style={{fontWeight:'bold'}}>KANPUR </Text>
      <Text>PANDEY TRADING COMPANY </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tables}>
      <Text style={{fontWeight:'bold'}}>NEW ASHOK NAGAR </Text>
      <Text>KRISHNA TRADING COMPANY </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tables}>
      <Text style={{fontWeight:'bold'}}>BALLABHGARH </Text>
      <Text>SHRIRAM TRADING COMPANY </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tables}>
      <Text style={{fontWeight:'bold'}}>BATALA </Text>
      <Text>SHREE TRADING COMPANY </Text>
      </TouchableOpacity>
     </ScrollView>
      <View>
      <TouchableOpacity style={styles.btnn}>
      <Text style={{fontWeight:'bold',color:'#fff'}}>SELECTED BEAT</Text>
      <AntDesign name='arrowright' size={25} color='#fff' />
      </TouchableOpacity>
     
      
      </View>
      
    </View>
  )
}

export default SummryDetailsScreen

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'97%',
        borderWidth:0.3,
        borderRadius:10,
        alignSelf:'center',
        marginTop:40
    },
    tables:{
        marginTop:30,
        marginLeft:10,
        borderBottomWidth:0.3,
        
        

    },
    btn:{
        height:30,
        width:80,
        backgroundColor:'blue',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
    btnn:{
        height:50,
        width:'95%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#093',
        marginTop:'10%',
        flexDirection:'row'
    }
})