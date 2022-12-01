import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../utils/responsive';
import { COLORS } from '../utils/colors';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonContainer, props.btnstyle]}>
      <Text style={styles.btnTxt}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.purple,
    padding: scale(12),
    width: scale(280),
  },
  btnTxt:{
    color: COLORS.white,
    fontSize:scale(16),
    fontWeight:'bold',
    textAlign:'center',
    borderRadius:scale(2)
  }
});
