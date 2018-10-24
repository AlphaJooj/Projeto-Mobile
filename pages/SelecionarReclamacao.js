import React, { Component } from 'react';
import {   
  StyleSheet,
  View, 
  TouchableOpacity,
  Image,
  Text } from 'react-native';

  export default class SelecionarReclamacao extends React.Component {

    render(){
      return(
        <View style={styles.container} >
            <Image style={styles.logo} source={{uri: 'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg? quality=75&auto=webp&disable=upscale' }} />
            <Text style={styles.containerLine}> Selecione a opção Desejada: </Text>
            
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}> 
                  <Text style={styles.buttonText}> Postar Reclamação </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}> 
                  <Text style={styles.buttonText}> Ver Reclamações </Text>
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

   containerLine:{
    fontSize: 25,
    alignSelf:'center'
   },

   logo:{
    flex:1,
    aspectRatio:1,
    height:50,
    borderRadius: 45,
    marginTop: 15,
    alignSelf:'center'
  },

   button:{
    backgroundColor: '#6D83F3'  ,
    borderBottomWidth:1,
    borderBottomColor: '#bbb',
    margin:5
  },

   buttonText:{
    textAlign: 'center',
    fontSize: 25,
    color:"#FFFFFF",
    fontWeight: 'bold',
    padding: 10
  }, 

  containerButton: {
    flex:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
 });
    