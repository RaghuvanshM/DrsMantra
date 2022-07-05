import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import OutletScreen from '../components/OutletScreen'

const NonProductiveRetailScreen = ({navigation}) => {
  return (
    <View>
      <OutletScreen />
      <View style={{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'

      }}>
      <TouchableOpacity>
      <Text style={{color:'#37eb34',borderBottomWidth:3, borderBottomColor:'#37eb34'}}>NOT VISITED</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>ORDER</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>NO ORDER</Text>
      </TouchableOpacity>
      
      </View>
      <ScrollView style={{padding:10}}>
        
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}  onPress={()=>navigation.navigate('DetailScreen')} >
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}  >
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
      <Text>done</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box1}>
      <Text>row</Text>
      </TouchableOpacity>
       </View>
      <Text style={styles.text1}>This is the item of the market</Text>
     
      </ScrollView>
    </View>
  )
}

export default NonProductiveRetailScreen

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:20

},
text1:{
    fontWeight:'bold',
    fontSize:16,
    borderBottomWidth:0.3,
    marginTop:4
},
box:{
  height:20, width:60, borderWidth:1, borderRadius:15,alignItems:'center',
},
box1:{
  height:20, width:90,borderWidth:1, marginLeft:10,borderRadius:15,alignItems:'center'
}
})