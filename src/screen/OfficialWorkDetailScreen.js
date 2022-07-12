import React from 'react'
import { StyleSheet, Text, View,TextInput,
    TouchableOpacity,ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HeaderScreen2 from '../components/HeaderScreen2'


const OfficialWorkDetailScreen = ({navigation}) => {
  return (
    <View>
     <View>
      <HeaderScreen2/>
     </View>
        <ScrollView style={{padding:7}}>
     <View style={{alignItems:'center'}}>
     <TextInput style={styles.textInputStyle}
     placeholder='Enter Official Work Name Here'  />
     </View>
     
     <View style={{marginTop:'10%',padding:7}}>
     <TouchableOpacity style={{borderWidth:1,height:50,width:'99%',
     alignSelf:'center',borderColor:'green',borderRadius:5}}>
     <Text style={{fontWeight:'bold',marginTop:13,marginLeft:20}}>Distributor Search</Text>
     </TouchableOpacity>
     </View>
     <View style={{marginTop:'10%',padding:7}}>
     <TouchableOpacity style={{borderWidth:1,height:50,width:'99%',
     alignSelf:'center',borderColor:'green',borderRadius:5}}
      onPress={()=>navigation.navigate('SelectDistributorScreen')}>
     <Text style={{fontWeight:'bold',marginTop:13,marginLeft:20}}>Distributor Visit</Text>
     </TouchableOpacity>
     </View>
     
     <View style={{marginTop:'10%',padding:7}}>
     <TouchableOpacity style={{borderWidth:1,height:50,width:'99%',
     alignSelf:'center',borderColor:'green',borderRadius:5}}>
     <Text style={{fontWeight:'bold',marginTop:13,marginLeft:20}}>Super Stockist Visit</Text>
     </TouchableOpacity>
     </View>
     
     <View style={{marginTop:'10%',padding:7}}>
     <TouchableOpacity style={{borderWidth:1,height:50,width:'99%',
     alignSelf:'center',borderColor:'green',borderRadius:5}}>
     <Text style={{fontWeight:'bold',marginTop:13,marginLeft:20}}>Head Office Visit</Text>
     </TouchableOpacity>
     </View>
     
     <View style={{marginTop:'10%',padding:7}}>
     <TouchableOpacity style={{borderWidth:1,height:50,width:'99%',
     alignSelf:'center',borderColor:'green',borderRadius:5}}>
     <Text style={{fontWeight:'bold',marginTop:13,marginLeft:20}}>Meeting</Text>
     </TouchableOpacity>
     </View>
     
     <TouchableOpacity style={{height:50,width:'99%', 
     backgroundColor:'#036eb6',alignSelf:'center',
     marginTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
     
     <Text style={{color:'#fff'}}>SELECT THIS OFFICIAL WORK</Text>
     <Ionicons name='arrow-forward' size={25} color='#fff' />
     </TouchableOpacity>
     </ScrollView>
    </View>
  )
}

export default OfficialWorkDetailScreen

const styles = StyleSheet.create({
    textInputStyle:{
        width:'99%',
        borderWidth:0.5,
        marginTop:10,
        borderRadius:30,
        
    }
})