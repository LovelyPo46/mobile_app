import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
