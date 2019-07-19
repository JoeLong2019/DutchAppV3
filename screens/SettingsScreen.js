import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native';


export default function SettingsScreen() {
  
  return (
  <ScrollView style={styles.container}>
  <Text>Plans will appaer here</Text>
</ScrollView>
);
}
 

SettingsScreen.navigationOptions = {
  title: 'Plans',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FF0054',
  },
});