import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => (
   <View>
     <Text style={styles.titulo}>
     SAPIENTIAM AUTEM NON VINCIT MALITIA</Text>
   </View>
);

export default Header;

const styles = StyleSheet.create({
    titulo: {
    fontSize: 18,
  }
});