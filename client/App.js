import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {store} from "./store";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import HomePage from './screens/HomePage';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LandingPageQuote from './screens/Quote/landingPageQuote';
import tw from "twrnc"
import landingPageLead from './screens/Lead/landingPageLead';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={tw`justify-between flex-1`}>

      <View style={tw`bg-gray-400 h-20`}>
        <SafeAreaView style={tw`pt-1`}>
          <HomePage/>
        </SafeAreaView>
      </View>
    <NavigationContainer style={tw``}>
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
        <Tab.Screen name="Leads" component={landingPageLead} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
