import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => (
   <View style={styles.containerStyle}>
     <Text style={styles.titulo}>
     SAPIENTIAM AUTEM NON VINCIT MALITIA</Text>
   </View>
);

export default Header;

const styles = StyleSheet.create({
    titulo: {
    fontSize: 18,
  },
  containerStyle: {
    marginTop: -100,
    fontSize: 46,
    alignItems: 'center',
  }
});