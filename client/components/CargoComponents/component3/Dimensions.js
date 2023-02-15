import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, Animated, StyleSheet } from "react-native";
import tw from "twrnc"

const Dimensions_box = ({textLabel, animation, display}) => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
        <View style={tw`items-center flex-row w-43 justify-between  bg-gray-100`}>
            <Text style={tw`text-lg  p-2`}>{textLabel}</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
        <View>
            {isEnabled && display}
        </View>
      
    </View>
  );
};


export default Dimensions_box;
