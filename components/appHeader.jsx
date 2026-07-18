import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header}>
        
      </Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#22C55E",
        padding:18
    },
    title:{
        color:"#fff",
        fontSize:22,
        fontWeight:"bold"
    },
});