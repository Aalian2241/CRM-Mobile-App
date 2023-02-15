import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, Animated, StyleSheet } from "react-native";
import tw from "twrnc"

const ToggleButton = ({textLabel, animation, display}) => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View style={tw`items-center flex-row w-43  bg-gray-100`}>
          <Text style={tw`text-base w-30  p-2`}>{textLabel}</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          
    </View>
    {isEnabled && display}
    </View>
    
  );
};


export default ToggleButton;
