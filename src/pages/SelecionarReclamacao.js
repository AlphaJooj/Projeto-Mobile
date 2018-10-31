import React, { Component } from 'react';
import {   
  StyleSheet,
  View, 
  TouchableOpacity,
  Image,
  Text } from 'react-native';
import Logo from '../components/Logo';

  export default class SelecionarReclamacao extends React.Component {
    render(){
      return(
        <View style={styles.container} >
            <Logo label= "Selecione a opção Desejada:" />

            
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}  onPress={() => {
                  this.props.navigation.navigate('SelecionarSetor')
                }} > 
                  <Text style={styles.buttonText}> Fazer Reclamação </Text>
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
  
   button:{
    backgroundColor: '#6D83F3'  ,
    borderBottomWidth:1,
    borderBottomColor: '#bbb',
    margin:15,
    elevation: 1,
    
    

  },
  buttonText:{
    textAlign: 'center',
    fontSize: 25,
    color:"#FFFFFF",
    fontWeight: 'bold',
    padding: 10
    
  },
  containerButton: {
    // flex:2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor :'#bbb' , 
   
  },

 });
    