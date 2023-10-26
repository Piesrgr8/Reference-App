import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home</Text>
        <Button title='Go to Info' onPress={() => navigation.navigate("Info")}/>
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
