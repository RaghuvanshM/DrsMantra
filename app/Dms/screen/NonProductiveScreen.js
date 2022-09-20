import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import RetailHeader from '../components/RetailHeader'

const NonProductiveScreen = ({navigation}) => {
  return (
    <View>
      <RetailHeader />
      <ScrollView style={{padding:3}}>
      
     
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:60,
        width:'100%',
        backgroundColor:'#12c7db',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }} >
     <View>
      <Text style={{fontSize:16,color:'#3f55d1',marginLeft:5}}>Grocery store</Text>
      <Text style={{fontSize:18,color:'#000',fontWeight:'bold',marginLeft:5}}>(A-B Tera Bazar)</Text>
      </View>
      <TouchableOpacity>
      <AntDesign style={{
        marginRight:20
      }} name='caretdown' size={25} color ='#000'/>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        backgroundColor:'#db1241',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        flexDirection:'row',
      }} onPress={()=>navigation.navigate('NoSalesReasonScreen')}>
      <Text style={{fontWeight:'bold', color:'#fff'}}>NEXT</Text>
      <AntDesign name='arrowright'size={25} color='#fff' />
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NonProductiveScreen

const styles = StyleSheet.create({})