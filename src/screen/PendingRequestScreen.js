import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PendingHeader from '../components/PendingHeader'

const PendingRequestScreen = ({navigation}) => {
  return (
    <View>
      <PendingHeader />
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        marginTop:200
      }} onPress={()=>navigation.navigate('SupportScreen')} >
      <Text>No Pending Request Funds</Text>
      <Text>Check PROCEED section for approved or rejections</Text>
      </View>
 
    </View>
  )
}

export default PendingRequestScreen

const styles = StyleSheet.create({})