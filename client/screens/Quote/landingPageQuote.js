import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import { Button } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddLead from '../Lead/addLead/addLead';

const LandingPageQuote = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={tw`flex`}>
      <View style={tw`flex-row  justify-between h-12 bg-gray-600 pt-.5`}>
        <View style={tw`justify-center pl-2`}>
            <Text style={tw`text-white font-light text-3xl`}>Quotes</Text>
        </View>
        <View style={tw`justify-center pr-1`}>
        <Pressable 
        onPress={()=>{console.log("pressed")}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(116, 206, 64)' : 'white',
          },
          tw`px-3 py-2 pt-2`]}> 
          <Text style={tw``}>Create a New Quote</Text>
        </Pressable>

        </View>
      </View>
      <View style={tw`bg-black h-full`}>
        <Tab.Navigator>
          <Tab.Screen name="Approved" component={AddLead}/>
        </Tab.Navigator>
      </View>
      
    </SafeAreaView>
  )
}

export default LandingPageQuote

const styles = StyleSheet.create({})