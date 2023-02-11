import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import ToggleButton from './ToggleButton'
import Component7a from './Component7a'
import Component7b from './Component7b'
import Component7c from './Component7c'
const Component7 = () => {
  return (
    <View style={tw`flex-row justify-between`} >
      <ToggleButton textLabel="Dangerous Goods" display={<Component7a/>}/>
      <ToggleButton textLabel="Temperature Controlled" display={<Component7b/>}/>
      <ToggleButton textLabel="Cargo Insurance" display={<Component7c/>}/>
    </View>
  )
}

export default Component7

const styles = StyleSheet.create({})