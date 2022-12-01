import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { scale } from '../utils/responsive';
import { COLORS } from '../utils/colors';

const CInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      placeholderTextColor={COLORS.black}
      {...props}
    />
  );
};

export default CInput;

const styles = StyleSheet.create({
    input: {
        padding: scale(8),
        borderBottomWidth: scale(0.5),
        borderBottomColor: COLORS.black,
        marginBottom: scale(10),
        backgroundColor: COLORS.white,
        borderRadius:scale(2)
      },
});
