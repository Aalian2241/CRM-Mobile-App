import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Modal, TouchableOpacity, Text, Button, Pressable, ScrollView, StyleSheet } from "react-native";
import {setServiceType, setLoadType, setScopeOfService, setIncoTerms, setCargoType, setStatus, setLoadCategory} from "../../slices/slice.js"
import { useDispatch } from "react-redux";
import tw from "twrnc";


const PrimaryDropDown = ({propItems,slice, title}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(propItems);

  return (
    <View style={tw``}>
        <View style={tw`pl-1`}>
            <TouchableOpacity style={tw`bg-gray-100 rounded-md `} onPress={() => setOpen(true)}>
                <View style={tw`h-11 w-37 flex-row justify-between items-center`}>
                <Text style={tw`text-lg text-center w-31`}>
                    {value ? items.find(item => item.value === value).label : title}
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
          <ScrollView >
          {items.map(item => (
            <TouchableOpacity
              key={item.value}
              onPress={() => {
                if(slice=="Status"){
                  dispatch(setStatus(item.value))
                }
                else if ( slice=="Service Type"){
                  dispatch(setServiceType(item.value))
                }
                else if (slice == "Load Type"){
                  dispatch(setLoadType(item.value))
                  dispatch(setLoadCategory(item.loadCategory))
                }
                setValue(item.value);
                setOpen(false);
              }}
            >
              <View style={tw`flex-row items-center justify-between border border-slate-500`}>
                <Text style={tw`text-3xl font-light m-3`}>{item.label}</Text>
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

export default PrimaryDropDown;
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