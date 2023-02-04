import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
const HomePage = () => {
  return (
    <View style={tw`bg-gray-700 flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`w-85 ml-2.5 h-11.5 bg-green-700 rounded-md`}>
          {/* Your content */}
        </View>
      </SafeAreaView>
    </View>
  );
};


export default HomePage

const styles = StyleSheet.create({})