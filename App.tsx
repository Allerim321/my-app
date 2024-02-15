import { StatusBar } from "expo-status-bar"
import { View, Text, Button, StyleSheet } from "react-native"

function App(){
  return(
    <View style={styles.container}>
    <StatusBar style="light" />
    <Text>Oi</Text>
    <Text>Oi</Text>
    <Button title="Clique aqui" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    color: "white"
  }
})

export default App