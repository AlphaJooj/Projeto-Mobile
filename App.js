import React, { Component } from 'react';
import {   
  StyleSheet,
  TouchableOpacity, 
  View, 
  TextInput,
  Image,
  Text } from 'react-native';


export default class Main extends React.Component {
  render(){
    return( 
    <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg? quality=75&auto=webp&disable=upscale' }} />
          
      <View style={styles.div}>
        <Text style={styles.TextLine} >Insira seu Email no campo abaixo.</Text>
        <TextInput placeholder="Email" style={styles.input}/>

        <TouchableOpacity style={styles.button} onPress={ ()=>{
            this.props.navigation.navigate('SegundaPagina');} }>
            <Text style={styles.buttonText}>Continuar </Text>
        </TouchableOpacity>
      </View>  
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#F5FCFF',
  },

  input: {
    height:60,
    width:"80%",
    textAlign: "center",
    fontSize: 25,
    alignSelf:'center'
  },

  TextLine: {
    textAlign: 'center',
    fontSize: 15,
    },
  
  logo: {
    flex:1,
    alignItems: 'center',
    aspectRatio: 1,
    height:50,
    borderRadius: 65,
    marginTop: 35,
    alignSelf: 'center',
  },

  button:{
    backgroundColor: '#6D83F3'  ,
    margin: 15
  },

  buttonText: {
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    color:"#FFFFFF",
    fontWeight: 'bold'
  },

  div: {
    flex:4,
    justifyContent: "center",
    alignItems: "center"  
  },
});