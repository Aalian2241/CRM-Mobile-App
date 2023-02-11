import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Pressable,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc";
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import CustomerAutoComplete from '../../../components/customerAutoComplete/CustomerAutoComplete';
import SelectStatus from "../../../components/dropDownPickers/SelectStatus"
const items = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "peach", "quince",
  "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla"
];
const AddLead = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(date)
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Approved', value: 'approved'},
    {label: 'Rejected', value: 'rejected'},
    {label: 'Open', value: 'open'},
    {label: 'Closed', value: 'closed'},
    {label: 'Cancelled', value: 'cancelled'}
  ]);

  return (
    <ScrollView style={tw`bg-white h-full `}>
      <View >
       <SafeAreaView style={tw`flex-row justify-between items-center h-19 bg-green-700 pt-.5`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-white ml-1.5 pr-2 pt-2.5 pl-2.5 mb-1 pb-2`}
            >
          <Ionicons name="arrow-back-sharp" size={24} color="green" />
          </TouchableOpacity>
            <Text style={tw`text-2xl pr-2 text-white  font-light`}>CREATE NEW LEAD</Text>

      </SafeAreaView>
      
      <View style={tw`pl-1.5`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`h-11 pt-0.5 `}>
          <Pressable 
            onPress={()=>setShow(true)}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(116, 206, 64)' : 'white',
              },
              tw`items-center border border-1 h-10 w-37 pt-2 bg-gray-100`]}> 
              <Text style={tw`text-lg`}>Select Date</Text>
              
            </Pressable>
        {show && ( 
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="calendar"
              onChange={onChange}
              
              
            />
          )}
          </View>
          
          <View style={tw`h-10 pr-0.5`}>
            <SelectStatus/>
          </View>
        </View>
            <View>
              <CustomerAutoComplete/>
            </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default AddLead

const styles = StyleSheet.create({})