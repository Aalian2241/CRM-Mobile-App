import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryDropDown from '../../dropDownPickers/primaryDropDown'
import tw from "twrnc"
import PlusButton from '../../plusButton/PlusButton'

const items=[
  { label: "Container Type", value: "container type" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
  { label: "Cancelled", value: "cancelled" }
]
const Component2 = () => {
  const [value, setValue] = useState("");
  return (
    <View style={tw`flex-row justify-between bg-gray-400 h-12 items-center pr-2 rounded-md`}>
      <View style={tw`flex-row pl-1`}>
        <PrimaryDropDown slice='shipment' propItems={items} title="Container Type"/>
        <TextInput placeholder='Qty.'  style={tw`border-b ml-4 text-center  rounded-md h-10 w-18 bg-white`} value={value} onChangeText={text => setValue(text)}/>
      </View>
      
      <View>
        <PlusButton/>
      </View>
      
    </View>
  )
}

export default Component2

const styles = StyleSheet.create({})