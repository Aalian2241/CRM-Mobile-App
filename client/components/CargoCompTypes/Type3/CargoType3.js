import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Component5 from "../../CargoComponents/component5/Component5"
import Component6 from "../../CargoComponents/component6/Component6"
import tw from "twrnc"
const CargoType3 = () => {
  return (
    <View style={tw`p-2`}>
      <Component5/>
      <Component6/>
    </View>
  )
}

export default CargoType3

const styles = StyleSheet.create({})