import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Collections from './components/Collections';
import CollectionImages from './components/CollectionImages';
import PreviewImage from './components/PreviewImage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
