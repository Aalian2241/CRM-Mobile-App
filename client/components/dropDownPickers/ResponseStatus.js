import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Modal, TouchableOpacity, Text, Button, Pressable, StyleSheet } from "react-native";
import tw from "twrnc";

const SelectStatus = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
    { label: "Cancelled", value: "cancelled" }
  ]);

  return (
    <View style={tw` border `}>
        <View style={tw``}>
            <TouchableOpacity style={tw`bg-gray-300 `} onPress={() => setOpen(true)}>
                <View style={tw`h-9.6 w-37 flex-row justify-between items-center`}>
                <Text style={tw`text-lg text-center w-30`}>
                    {value ? items.find(item => item.value === value).label : "Response Status"}
                </Text>
                <Ionicons style={tw`pr-6`} name ="chevron-down-outline" size={24}/>
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
        </View>
      </Modal>
    </View>
  );
};

export default SelectStatus;
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