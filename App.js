import React, { Component } from 'react';
import { Alert, 
  AppRegistry, 
  Button, 
  StyleSheet,
  TouchableOpacity, 
  View,
  ImageBackground,
  Icon, 
  TextInput,
  Image,
  Text } from 'react-native';

import Header from './components/Header';

export default class App extends React.Component {
  render(){
    return( 

    <View style={styles.general}>
    <Header />
    <Text style={styles.hello}>Bem Vindo ao FG Reclama</Text>
    <Image
     style={{width: 100, height: 100, marginTop: 40, borderRadius: 100}}
     source={{uri: 'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg? quality=75&auto=webp&disable=upscale'}} />
    <Text style={styles.email}>Para Iniciar, Insira seu Email:</Text> 
    <TextInput 
    style ={styles.textBox}> 
    </TextInput>
    <TouchableOpacity style={styles.button}
     onPress={() => this._handlePress()}>  
     <Text>Entrar</Text>
  </TouchableOpacity>
</View>      
    );
  }
}

const styles = StyleSheet.create({
  general: {
   flex: 1,
   backgroundColor: '#265cb5',
   justifyContent: 'center',
   alignItems: 'center',
  },

  hello: {
   fontSize: 14,
  },

  email: {
   fontSize: 16,
   marginTop: 40,
  },

  textBox: {
   height: '5%',
   width: '90%',
   borderColor: 'black',
   borderWidth: 1,
   borderRadius: 50,
   backgroundColor: '#ffffff'
  },

  button: {
    backgroundColor: '#ffffff',
    width: 85,
    alignItems: 'center',
    marginTop: 10, 
    padding: 10,   
    borderColor: 'black',
    borderRadius: 18,
    borderWidth: 1
  },
});