import React,{useRef,useEffect} from 'react'
import { StyleSheet, 
  Text, View,
  Image, 
  ActivityIndicator} from 'react-native'
import Header from '../components/Header'


const Registrationdone = ({navigation}) => {
  useEffect(()=>{
setTimeout(()=>{
  navigation.navigate('Start')
},1000)
  },[])
  return (
    <View>
    <Header />
    <View style={styles.container1}>
    
    <Image style={{height:'70%', width:'80%'}} 
    source={require('../../assets/logo.png')} 
    resizeMode="contain" />
    </View>
      <ActivityIndicator size={'large'} color={'#20B2AA'}  />
      <View>
      </View>
      <Text style={{padding:20, alignSelf:'center',fontSize:15}}>
      Loading Data Please wait</Text>
      <View style={{alignItems:'center'}}>
      <Text>DSRMANTRA</Text>
      </View>
    
    </View>
  )
}

export default Registrationdone

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        fontSize:17

    },
    text1:{
        marginTop:20,
        fontSize:17,
        color:'#036eb6'
    },
    text2:{
        marginTop:20,
        fontSize:17,
        color:'#036eb6'


    },
    container1:{
        alignItems:'center',
        marginTop:100
    }
})