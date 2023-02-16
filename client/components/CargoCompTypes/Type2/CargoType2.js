import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Component3 from "../../CargoComponents/component3/Component3"
import Component4 from "../../CargoComponents/component4/Dimensions"
import Component5 from "../../CargoComponents/component5/Component5"
import Component7 from "../../CargoComponents/component7/Component7"
import tw from "twrnc";
import Comp4 from '../../CargoComponents/component4/comp4'

const CargoType3 = () => {
  return (
    <View style={tw``}>
        <Component3/>
        <Comp4/>
        <Component5/>
        <Component7/>
    </View>
  )
}

export default CargoType3

const styles = StyleSheet.create({})