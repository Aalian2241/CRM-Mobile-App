import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddLead from '../Lead/addLead/addLead';
import { useNavigation } from '@react-navigation/native';
import ManageLead from './manageLead/manageLead';
import LeadAdded from "./tabs/leadAdded/LeadAdded"
import Followup from "./tabs/followup/Followup"
import NotQualified from "./tabs/notQualified/NotQualified"
import Qualified from "./tabs/qualified/Qualified"

const LandingPageLead = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  return (
    <View style={tw`flex`}>
      <View style={tw`flex-row  justify-between h-19 bg-green-700 pt-.5`}>
        <View style={tw`justify-end pl-2 pb-2`}>
            <Text style={tw`text-white font-light text-3xl`}>Leads</Text>
        </View>
        <View style={tw`justify-end pr-1 pb-2`}>
        <Pressable 
        onPress={()=>navigation.navigate("AddLead")}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(116, 206, 64)' : 'white',
          },
          tw`px-3 py-2 pt-2`]}> 
          <Text style={tw``}>Create a New Lead</Text>
        </Pressable>

        </View>
      </View>
      <View style={tw`bg-black h-full`}>
        <Tab.Navigator>
          <Tab.Screen name="Lead Added" component={LeadAdded}/>
          <Tab.Screen name="Followup" component={Followup}/>
          <Tab.Screen name="Not Qualified" component={NotQualified}/>
          <Tab.Screen name="Qualified" component={Qualified}/>
        </Tab.Navigator>
      </View>
      
    </View>
  )
}

export default LandingPageLead

const styles = StyleSheet.create({})