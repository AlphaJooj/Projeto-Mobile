import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';

export default class SelecionarSetor extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Logo label="Seleciona o setor a reclamar:"/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Setor 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Setor 2 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Setor 3 </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Setor 4 </Text>
                </TouchableOpacity>
           
            </View>
        );
    }
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#F5FCFF',
        flex:1,
    },
    button:{
        backgroundColor: '#6D83F3'  ,
        borderBottomWidth:1,
        borderBottomColor: '#bbb',
        elevation: 1,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,

    },
    buttonText:{
        textAlign: 'center',
        fontSize: 25,
        color:"#FFFFFF",
        fontWeight: 'bold',
        padding: 5
      },
})