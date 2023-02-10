import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc";

import { useNavigation } from '@react-navigation/native';

const AddLead = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white  `}>
      <SafeAreaView style={tw`flex-row justify-between items-center h-19 bg-green-700 pt-.5`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-white ml-1.5 pr-2 pt-2.5 pl-2.5 mb-1 pb-2`}
        >
      <Ionicons name="arrow-back-sharp" size={24} color="green" />
    </TouchableOpacity>
        <Text style={tw`text-2xl pr-2 text-white font-light`}>CREATE NEW LEAD</Text>

      </SafeAreaView>
    </View>
  )
}

export default AddLead

const styles = StyleSheet.create({})