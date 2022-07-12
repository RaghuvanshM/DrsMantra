import React from 'react'
import { StyleSheet, Text, View,Image,
TextInput,TouchableOpacity,
ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const OtpScreen = ({navigation}) => {
  return (
   
    <View >
    <ScrollView style={{padding:15}}>
     <View style={styles.logoContainer}>
     <Image style={styles.img} source={require('../../assets/logo.png')} 
     resizeMode="contain" />
     </View>
     <Text style={{padding:10,marginLeft:50,fontSize:17,
      fontWeight:'400',color:'#371B58'}}>PHONE</Text>
     <View style={{flexDirection:'row', 
     marginLeft:5, alignItems:'center'}}>
      <FontAwesome5  name='phone-alt' size={30} color='#036eb6' />
     <TextInput style={{marginLeft:5, padding:7,
       borderBottomWidth:3, width:'80%', borderColor:'#5a7e94'}}
      placeholder='Enter Number' keyboardType='numeric' />
      
     </View>
     <Text style={{marginLeft:40,marginTop:20, 
      fontWeight:'bold'}}>Activation Code</Text>
     <View style={{flexDirection:'row',marginLeft:5, alignItems:'center'}}>
     
      <FontAwesome5  name='lock' size={30} color='green' />
     <TextInput style={{marginLeft:5, padding:7, 
      borderBottomWidth:3, width:'80%',borderColor:'#5a7e94'}}
      placeholder='Enter Code' keyboardType='numeric' />
      
     </View>
     <Text style={{padding:10,marginLeft:30, fontSize:15,marginTop:30,
      fontWeight:'400', color:'#000'}}>Already have an Activation Code?</Text>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{navigation.navigate("Registrationdone")}}
      >
      <Text style={{fontSize:15,color:'#fff'}} >Get Activation Code</Text>
      </TouchableOpacity>
      <View>
      <Text style={{padding:10, fontSize:12, marginTop:10, 
        marginLeft:20,fontWeight:'400',color:'#000'}}>FOR QUERY CONTACT ON 011-411-7-99996</Text>
      
      </View>
      
        </ScrollView>
    </View>
    
  )
}

export default OtpScreen

const styles = StyleSheet.create({
  logoContainer:{
    alignItems:'center',
    padding:10,
    height:'45%'
  },
  img:{
    
    width:'80%'
  },
  btn:{
    height:40,
    width:'83%',
    backgroundColor:'#036eb6',
    marginLeft:30,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    borderRadius:3
  }
})