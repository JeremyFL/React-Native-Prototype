import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import color from 'color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

const Input = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <View>
        <Text style={[styles.label]}>Label</Text>
      </View>
      <View style={[styles.inputContainer]}>
        <MaterialCommunityIcons
          name="account"
          size={moderateScale(18)}
          color={color('#8F9CB3').darken(0.4).string()}
          style={[styles.iconLeft]}
        />
        <TextInput style={[styles.input]} placeholder="Placeholder" />
        <ActivityIndicator size="small" style={[styles.iconRight]} />
      </View>
      <View style={[styles.helperContainer]}>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={moderateScale(12)}
          color={color('#8F9CB3').darken(0.4).string()}
          style={[styles.iconLeft]}
        />
        <Text style={[styles.helper]}>Helper text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color('#8F9CB3').alpha(0.35).toString(),
    backgroundColor: color('#8F9CB3').alpha(0.1).toString(),
  },
  iconRight: {
    margin: moderateScale(4),
  },
  iconLeft: {
    marginHorizontal: moderateScale(4),
  },
  input: {
    width: moderateScale(250),
    height: verticalScale(45),
    fontSize: moderateScale(18),
  },
  label: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: color('#8F9CB3').darken(0.4).string(),
    marginBottom: moderateScale(4),
  },
  helper: {
    fontSize: moderateScale(12),
    color: color('#8F9CB3').darken(0).string(),
    marginTop: moderateScale(4),
  },
  helperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
