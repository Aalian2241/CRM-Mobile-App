import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, FlatList } from 'react-native';
import tw from "twrnc";
import PlusButton from '../plusButton/PlusButton';

const items = [  "ABC", "banana", "cherry", "date", "elderberry",  "fig", "grape", "honeydew", "kiwi", "lemon",  "mango", "nectarine", "orange", "peach", "quince",  "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla", "tangerine", "ugli fruit",  "appp", "appep", "appsp", "appqp"];

const CustomerAutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [resultValue, setResultValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  console.log(results)

  const handleTextInput = (text) => {
    setSearchTerm(text);
    setResultValue('');
    if (text.length >= 2) {
      setResults(
        items
          .filter(item => item.toLowerCase().includes(text.toLowerCase()))
          .slice(0, 7)
      );
    } else {
      setResults([]);
    }
  };

  const handleSelectResult = (item) => {
    setResultValue(item);
    setSearchTerm(item);
    setResults([]);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setResults([]);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };


  return (
    <View style={tw`flex-row justify-between`}>
      <View style={tw`w-76`}>
        <TextInput
          style={tw`h-10 pl-2 border border-1 text-lg`}
          value={resultValue || searchTerm}
          onChangeText={handleTextInput}
          placeholder="Customer Name"

        />
        {results.length > 0  && (
          <FlatList
            data={results}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Text  
              style={tw`text-xl pl-2 bg-gray-200 border-t-slate-400 border pb-3 `}
              onPress={() => handleSelectResult(item)}>{item}</Text>
            )}
            style={tw`absolute  top-10 left-0 right-0 bg-white max-h-200 z-1`}
          />
        )}
      </View>
      <View>
        <PlusButton/>
      </View>
    </View>
  );
};

export default CustomerAutoComplete;
