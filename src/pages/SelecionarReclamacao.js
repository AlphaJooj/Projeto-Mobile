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
            <Text style={styles.containerLine}> TESTE: </Text>
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
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
   },
   logo:{
    aspectRatio:1,
    width: 50,
    height:50,
    borderRadius: 45,
    marginTop: 15,
    padding:5
   
   },

 });
    