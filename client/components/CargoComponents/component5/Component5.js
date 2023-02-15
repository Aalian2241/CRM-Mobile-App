import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";

const Component5 = () => {
  const [value, setValue] = useState("");

  return (
    <View style={tw``}>
      <TextInput placeholder='Remarks' style={tw`bg-white p-2 rounded-md`} value={value} onChangeText={text=>setValue(text)}/>
    </View>
  )
}

export default Component5

const styles = StyleSheet.create({})