import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import ToggleButton from "../component7/ToggleButton"

import Dimensions from './Dimensions'
import Component4 from './component4'
const Comp4 = () => {
  return (
    <View>
      <View style={tw`flex-row  pt-1 pb-1`} >
        <View style={tw`pr-0.8`}>
           <ToggleButton  textLabel="Dimensions" display={<Dimensions/>}/>
        </View>
        
      </View>
      <Component4/>
    </View>
    
  )
}

export default Comp4

const styles = StyleSheet.create({})