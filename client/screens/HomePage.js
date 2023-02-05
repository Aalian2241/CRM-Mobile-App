import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Menu, Divider, Provider, Button } from 'react-native-paper';
import tw  from "twrnc";
import { HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HomePage = () => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const openMenu1 = () => setVisible1(true);
  const closeMenu1 = () => setVisible1(false);

  const openMenu2 = () => setVisible2(true);
  const closeMenu2 = () => setVisible2(false);   

  return (
    <Provider>
      <View style={tw`bg-gray-700 flex-1`}>
        <SafeAreaView style={tw`flex-1`}>
          <View style={tw`h-11.5 bg-green-700 rounded-md`} />
        </SafeAreaView>
        
      </View>
    </Provider>
  );
};

export default HomePage;
