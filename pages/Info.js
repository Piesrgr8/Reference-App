import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function Info({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Info</Text>
        <Button title='Go to Home' onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});