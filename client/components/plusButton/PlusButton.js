import React from 'react';
import { TouchableOpacity, StyleSheet,View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw, { styled } from 'twrnc';

const PlusButton = ({ onPress }) => (
  <TouchableOpacity style={tw`pr-.5  `} onPress={onPress}>
    <View style={tw` rounded-full border w-10 bg-green-700 h-10 flex justify-center items-center`}>
      <Ionicons name="ios-add" size={29} color="white" />
    </View>
  </TouchableOpacity>
);


export default PlusButton;
