import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import LandingPageLead from './Lead/landingPageLead';
import LandingPageQuote from './Quote/landingPageQuote';

const SearchScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Quotes') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            }
            else if (route.name === 'Leads') {
              iconName = focused ? 'book' : 'book-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}}/> */}
        <Tab.Screen name="Quotes" component={LandingPageQuote} options={{headerShown:false}} />
        <Tab.Screen name="Leads" component={LandingPageLead} options={{headerShown:false}} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10
  },
  resultItem: {
    padding: 10
  }
});

export default SearchScreen;
