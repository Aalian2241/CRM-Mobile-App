import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";

const Component6 = () => {
  const [cargoDetails, setCargoDetails] = useState("");

  return (
    <View style={tw`pt-1`}>
      <TextInput placeholder='Cargo Details' style={tw`rounded-md bg-white p-2`} value={cargoDetails} onChangeText={text=>setCargoDetails(text)}/>
    </View>
  )
}

export default Component6

const styles = StyleSheet.create({})