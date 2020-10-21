import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const HomeScreen = () => (
  <View style={[styles.container]}>
    <Button
      mode="outlined"
      label="Example"
      onPress={() => {
        console.log('press');
      }}
    />
    <View>
      <Input />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
