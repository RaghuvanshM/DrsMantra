import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{color:'#fff', marginLeft:20}}>DSRMANTRA</Text>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    header:{
        height:50,
        backgroundColor:'#036eb6',
        justifyContent:'center',
    }

})