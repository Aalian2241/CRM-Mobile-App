import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';

const LandingPageLead = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw``}>
      <View style={tw`flex-row justify-between h-12 bg-gray-600 pt-.5`}>
        <View style={tw`justify-center pl-2`}>
            <Text style={tw`text-white font-light text-3xl`}>Leads</Text>
        </View>
        <View style={tw`justify-center pr-1`}>
        <Pressable 
        onPress={()=>{navigation.goBack()}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(116, 206, 64)' : 'white',
          },
          tw`px-3 py-2 pt-2`]}> 
          <Text style={tw``}>Create a New Lead</Text>
        </Pressable>

        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default LandingPageLead

