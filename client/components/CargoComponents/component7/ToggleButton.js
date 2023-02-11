import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet } from "react-native";
import tw from "twrnc"

const ToggleButton = ({textLabel, animation, display}) => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const toggleHandler = () => {
    setToggle(!toggle);
    setBgColor(toggle ? "white" : "green");
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleHandler} style={[styles.toggle, { backgroundColor: bgColor }]}>
        <Text style={toggle ? tw`text-white` : tw`text-black`}>{textLabel}</Text>
      </TouchableOpacity>
      {toggle && display}
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    width: 100,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ToggleButton;
