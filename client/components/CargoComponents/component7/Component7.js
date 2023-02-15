import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import ToggleButton from './ToggleButton'
import Component7a from './Component7a'
import Component7b from './Component7b'
import Component7c from './Component7c'
const Component7 = () => {
  return (
    <View>
      

      <View style={tw`flex-row  pt-1 pb-1 `} >
        <View style={tw`pr-0.8`}>
           <ToggleButton textLabel="Temperature Controlled" display={<Component7b/>}/>
        </View>
        <ToggleButton textLabel="Dangerous Goods" display={<Component7a/>}/>
        
      </View>
      <View style={tw`w-43`}>
        <ToggleButton textLabel="Cargo Insurance" display={<Component7c/>}/>
      </View>
      
    </View>
    
  )
}

export default Component7

const styles = StyleSheet.create({})