import { createStackNavigator } from 'react-navigation';

import Main from './src/pages/Main';
import SelecionarReclamacao from './src/pages/SelecionarReclamacao';

export default createStackNavigator({
  
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
    'Main' : {
        screen: Main
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