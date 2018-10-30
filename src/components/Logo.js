import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';


const Logo = ({ label }) => {
    return (
        <View style={styles.containerLogo}>
        <Image style={styles.logo}
         source={{uri: 
         'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg? quality=75&auto=webp&disable=upscale'
          }} />
		<Text style={styles.containerLine}> { label }</Text>
	    </View>
    );
}

const styles = StyleSheet.create ({
    containerLogo:{
       // alignItems:'center'
    },
    logo:{
        aspectRatio:1,
        height:60,
        borderRadius: 45,
        marginTop: 15,
        padding:15 ,
        alignSelf: 'center'
       
       },
    containerLine:{
        fontSize: 25,
        padding: 15,
        marginTop: 15,
        textAlign:'center',
    
    },

})
export default Logo;