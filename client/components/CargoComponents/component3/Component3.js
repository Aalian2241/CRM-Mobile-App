import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToggleButton from '../component7/ToggleButton'
import tw from "twrnc"
import Component7 from '../component7/Component7'
import Dimensions_box from './Dimensions'
const Component3 = () => {
  return (
    <View style={tw`flex `}>
      
      <View style={tw`p-1`}>
        <ToggleButton textLabel="Stackable Packages" display={<></>}/>
      </View>
      
    </View>
  )
}

export default Component3

const styles = StyleSheet.create({})