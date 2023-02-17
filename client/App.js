import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {store} from "./store";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import TopBar from './components/topBar/TopBar';
import HomePage from "./screens/HomePage";
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LandingPageQuote from './screens/Quote/landingPageQuote';
import tw from "twrnc"
import landingPageLead from './screens/Lead/landingPageLead';
import { createStackNavigator } from '@react-navigation/stack';
import AddLead from './screens/Lead/addLead/addLead';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <View style={tw`flex-1`}>

     
    <NavigationContainer style={tw``}>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}  />
        <Stack.Screen name="AddLead" component={AddLead} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    </Provider>
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

