import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image, TouchableOpacity,Button } from 'react-native';
import FastImage from 'react-native-fast-image';
import tw  from "twrnc";
import { HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const HomePage = () => {
  return (
    <View style={tw`bg-gray-700 flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`h-11.5 bg-green-700 rounded-md`}>
          {/* Your content */}
        </View>
      </SafeAreaView>
      <View style={tw`bg-white h-12`}>
      <HStack row center spacing={1} style={tw`justify-around`}>
        <IconButton style={tw`flex-1 bg-white`} icon={props => <Icon name="book-open-blank-variant" {...props} />} />
        <IconButton style={tw`flex-1 bg-white`} icon={props => <Icon name="home-outline" {...props} />} />
        <IconButton style={tw`flex-1 bg-white`} icon={props => <Icon name="clipboard-outline" {...props} />} />
      </HStack>
      </View>
    </View>
  );
};

export default HomePage;
