import React from 'react'
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native'
import HeaderScreeen from '../components/HeaderScreeen '
import AntDesign from 'react-native-vector-icons/AntDesign'

const TimerScreen = ({navigation}) => {
  return (
    <View>
      <HeaderScreeen />
      <ScrollView style={{padding:8}}>
      <View style={styles.box}>
      <Text style={styles.text1}>COMMENTS</Text>
      <TextInput  style={styles.textBox}
      placeholder='KRISHNA TRADERS pharmacy' placeholderTextColor={'lightgrey'}  />
      <Text style={{alignSelf:'flex-end',fontSize:12, color:'#093',marginRight:10}}>25/200</Text>
      </View>
      <View style={styles.img}>
      <Image style={{height:100,width:100}} source={require('../../assets/watch.png')} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center', marginTop:40}}>
      <Text style={{fontSize:20,color:'#093'}} >01 :</Text>
      <Text style={{marginLeft:10,fontSize:20,color:'#093'}}>03 :</Text>
      <Text  style={{marginLeft:10,fontSize:20,color:'#093'}}>40 </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',}}>
      <Text style={{fontSize:10,}} >Hours :</Text>
      <Text style={{marginLeft:10,fontSize:10}}>min :</Text>
      <Text  style={{marginLeft:10,fontSize:10}}>Sec</Text>
      </View>
       <TouchableOpacity style={styles.file}  onPress={()=>navigation.navigate('CameraScreen')} >
      <AntDesign name='filetext1' size={60} color='#34ebe5' />
     
      <Text style={styles.fileText} >Fill Survey</Text>
     
     
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SummryDetailsScreen')}>
      <Text style={{fontWeight:'bold',color:'#fff'}}>FINISH</Text>
      <AntDesign name='arrowright' size={28} color='#fff' />
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default TimerScreen

const styles = StyleSheet.create({
    box:{
        height:150,
        width:'80%',
        backgroundColor:'#fff',
        borderWidth:0.4,
        alignSelf:'center',
        marginTop:50,
        borderRadius:10,
    },
    text1:{
        padding:10
    },
    textBox:{
        fontSize:13,
        borderBottomWidth:0.3,
        width:'95%',
        alignSelf:'center'
    },
    img:{
        alignItems:'center',
        marginTop:40
    },
    file:{
        height:100,
        width:'30%',
        alignItems:'center',
        marginTop:40,
        
        justifyContent:'center',
        alignSelf:'center'
    },
    btn:{
        height:45,
        backgroundColor:'#5cab61',
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        flexDirection:'row',
    },
    fileText:{
        fontWeight:'bold'
    }
})