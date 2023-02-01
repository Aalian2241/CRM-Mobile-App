import { StatusBar } from 'expo-status-bar';
import {  KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {store} from "./store";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 :-50}>
            <Stack.Navigator>
                <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                  headerShown:false
                }}
                />
            </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
      
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
