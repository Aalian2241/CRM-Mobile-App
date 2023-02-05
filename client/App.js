import { StatusBar } from 'expo-status-bar';
import {  KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {store} from "./store";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPageQuote from './screens/Quote/landingPageQuote';
import landingPageLead from './screens/Lead/landingPageLead';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Quotes" component={LandingPageQuote} />
        <Tab.Screen name="Leads" component={landingPageLead} />
      </Tab.Navigator>
    </NavigationContainer>
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
