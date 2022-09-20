import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
 
 const StartScreen = ({navigation}) => {
   return (
     <View >
       <Header />
       <View style={{marginTop:10,marginLeft:10}}>
       <Text>Friday 10-June-2022</Text>
       <Text>11:10AM</Text>
       </View>
       <View style={{height:120,width:120, backgroundColor:'#F9AB',
       alignSelf:'center', marginTop:15,borderRadius:10 }}>
       </View>
       <Text style={{ alignSelf:'center', marginTop:10}}>
       Good Morning! Trening User, Let's get start</Text>
       <View style={{marginTop:'30%'}}>
   
       <View style={styles.start}>
       <TouchableOpacity style={styles.part} 
       onPress={()=>navigation.navigate('ContinueScreen')}>
       <Ionicons name='partly-sunny' size={40} color='#00FFAB'  />
       <Text style={{marginTop:10,fontSize:15, fontWeight:'bold'}}>Retailing</Text>
        <AntDesign name='right' size={40} color='green' />
        
       </TouchableOpacity>
    
       </View>
       <View style={styles.start}>
       <TouchableOpacity style={styles.part} 
       onPress={()=>navigation.navigate('OfficialWorkDetailScreen')}>
       <Ionicons name='partly-sunny' size={40} color='#00FFAB'  />
       <Text style={{marginTop:10,fontSize:15, fontWeight:'bold'}}>Official Work</Text>
        <AntDesign name='right' size={40} color='green' />
        
       </TouchableOpacity>
    
       </View>
       <View style={styles.start}>
       <TouchableOpacity style={styles.part}>
       <AntDesign name='book' size={40} color='green'  />
       <Text style={{marginTop:10,fontSize:15, 
        fontWeight:'bold'}}>Mark Leave/Weakly Off</Text>
        <AntDesign name='right' size={40} color='green' />
        
       </TouchableOpacity>
    
       </View>
       </View>
      
     </View>
   )
 }
 
 export default StartScreen
 
 const styles = StyleSheet.create({
   container:{
     alignItems:'center',
     marginTop:40
     
   },
   text:{
     fontSize:15,
   },
   text1:{
     marginTop:20,
     fontSize:15
   },
   start:{
     height:60,
     width:'92%',
     marginLeft:'3%',
     backgroundColor:'#fff',
     marginTop:40,
     justifyContent:'center'
   },
   part:{
     flexDirection:'row',
     justifyContent:'space-between',
     padding:5,
     
   }
 })