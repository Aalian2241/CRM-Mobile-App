import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import { Button } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddLead from '../Lead/addLead/addLead';
import Added from "./tabs/added/Added"
import Approved from "./tabs/approved/Approved.js"
import FollowedUp from "./tabs/followedup/Followedup" 
import ProposalSent from "./tabs/proposalsent/ProposalSent"
import Reviewed from "./tabs/reviewed/Reviewed"

const LandingPageQuote = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={tw`flex`}>
      <View style={tw`flex-row  justify-between h-19 bg-green-700 pt-.5`}>
        <View style={tw`justify-end pl-2 pb-2`}>
            <Text style={tw`text-white font-light text-3xl`}>Quotes</Text>
        </View>
        <View style={tw`justify-end pr-1 pb-2`}>
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
          <Tab.Screen name="Added" component={Added}/>
          <Tab.Screen name="Proposal Sent" component={ProposalSent}/>
          <Tab.Screen name="Followed-Up" component={FollowedUp}/>
          <Tab.Screen name="Reviewed" component={Reviewed}/>
          <Tab.Screen name="Approved" component={Approved}/>
        </Tab.Navigator>
      </View>
      
    </View>
  )
}

export default LandingPageQuote

const styles = StyleSheet.create({})