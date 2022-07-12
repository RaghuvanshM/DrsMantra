
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderScreeen = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Distributor Visit</Text>
    </View>
  )
}

export default HeaderScreeen

const styles = StyleSheet.create({
    header:{
        height:45,
        width:'100%',
        backgroundColor:'#fff',
        elevation:2,
        justifyContent:'center',
        

    },
    text:{
        marginLeft:30,
        fontWeight:'bold',
        fontSize:15
    }
})