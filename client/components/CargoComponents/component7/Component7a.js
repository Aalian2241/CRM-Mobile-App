import {  View, Modal, TouchableOpacity, Text, Button, Pressable, StyleSheet , TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import PrimaryDropDown from '../../dropDownPickers/primaryDropDown';
import { Ionicons } from "@expo/vector-icons";


const temps = [
  { label: "C", value: "c" },
  { label: "F", value: "f" },
]
const DropDown = ({propItems, title}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(propItems);
  
    return (
      <View style={tw` pt-1`}>
          <View style={tw``}>
              <TouchableOpacity style={tw`bg-gray-100 rounded-md `} onPress={() => setOpen(true)}>
                  <View style={tw`h-7 w-17 flex-row  items-center`}>
                  <Text style={tw`text-base text-center w-14 `}>
                      {value ? items.find(item => item.value === value).label : title}
                  </Text>
                  <Ionicons style={tw`pr-1`} name ="chevron-down-outline" size={12}/>
                  </View>
              </TouchableOpacity>
          </View>
        
          <Modal visible={open}>
          <View style={tw`h-full w-full justify-center  bg-white`}>
            <View style={tw`p-4 items-center`}>
              <Pressable style={styles.button} onPress={()=>setOpen(false)}>
                  <Text style={styles.text}>Close</Text>
              </Pressable>
              
            </View>
            <ScrollView contentContainerStyle={{ height: "100%", overflow: "scroll" }}>
              {items.map(item => (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => {
                    setValue(item.value);
                    setOpen(false);
                  }}
                >
                  <View style={tw`flex-row items-center justify-between border border-slate-500`}>
                    <Text style={tw`text-5xl font-light m-3`}>{item.label}</Text>
                    <View
                      style={[
                        tw`rounded-full h-6 w-6 mr-1`,
                        { backgroundColor: value === item.value ? "blue" : "white" }
                      ]}
                    />
                    
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>

      </View>
    );
  };
  
const Component7a = () => {

  return (
    <View style={tw`items-center bg-gray-300 pt-1 pb-1`}>      
      <DropDown propItems={temps} title="Class"/>
    </View>
  )
}

export default Component7a

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });


