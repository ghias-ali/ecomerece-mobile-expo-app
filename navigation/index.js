import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginPage";
import Signup from "../auth/SignupPage";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  );
};

export default MyStack;
