import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
const HomePage = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Text style={tw`text-center`}>HomePage</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({})