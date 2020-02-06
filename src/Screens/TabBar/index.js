import React from 'react';
import { StyleSheet, View } from 'react-native';

import TabBar from './TabBar';

export default function({ navigation }) {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'flex-end',
  },
});
