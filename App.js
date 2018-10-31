import { createStackNavigator } from 'react-navigation';

import Main from './src/pages/Main';
import SelecionarReclamacao from './src/pages/SelecionarReclamacao';
import SelecionarSetor from './src/pages/SelecionarSetor';

export default createStackNavigator({
     
   
    'Main' : {
        screen: Main
    },
    'SegundaPagina' : {
        screen: SelecionarReclamacao,
            navigationOptions: {
                    headerTitleStyle:{
                        color:'#FFFFFF',
                        fontSize: 30,
                        marginLeft: -20,
                        flexGrow: 1,
                        textAlign: 'center'
                },
        }
    },
    'SelecionarSetor' : {
        screen: SelecionarSetor,
            navigationOptions: {
                title: '@MUDAR ISSO ',
                    headerTitleStyle:{
                        color:'red',
                        fontSize: 50,
                        textAlign:'center'
                    },
            },

    },
   
},
 {
    navigationOptions: {
        title:'Revoltz !', 
        headerTintColor: '#FFFFFF',
            headerStyle: { 
                backgroundColor: '#6D83F3',
                borderBottomWidth: 1,

        },
        headerTitleStyle:{
            color:'#FFFFFF',
            fontSize: 30,
            textAlign: 'center',
            flexGrow: 1,
        },
    }
});