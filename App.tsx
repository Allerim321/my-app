import { StatusBar } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"

function App(){
  return(
    <View>
    <View style={styles.header}>
    <StatusBar 
          barStyle="light-content"
          backgroundColor="black"/>
    <Image source={require('./assets/senai.png')}
    style={styles.logo}/>
    <Text style={styles.bemvindo}>Bem Vindo(a)</Text>
    </View>
    <View>
    <Text style={styles.container}>Email:</Text>
    <TextInput style={styles.input} placeholder="Digite seu email:"/>
    <Text style={styles.container}>Senha:</Text>
    <TextInput style={styles.input} placeholder="Digite sua senha:"/>
    <TouchableOpacity style={styles.button}><Text style={styles.textobotao}>Acessar</Text></TouchableOpacity>
    <Text style={styles.link} onPress={link}>
          Não possui conta? Cadastre-se
        </Text>
    <View style={styles.icons}>
    <AntDesign name="google" size={24} color="black" />
    <AntDesign name="facebook-square" size={24} color="black" /></View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({

  header: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 50,
    paddingBottom: 30,
    marginBottom: 20,
    color: "white"
  },
  logo: {
    width: 200,
    height: 52,
    marginBottom: 10
  },
  bemvindo: {
    fontSize: 20,
    color: "white"
  },
  container:{
    margin: 20,
    marginBottom: 0,
    fontSize: 16
  },
  input: {
    margin: 20,
    width: 320,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    width: 320
  },
  textobotao: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: '#4305C7',
    margin: 20,
    marginTop: 10
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6
  }
})

const link = () => {
  Alert.alert('Página em desenvolvimento');
};

export default App