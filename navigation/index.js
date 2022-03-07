import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginPage";
import Signup from "../auth/SignupPage";
import MyDrawer from "./Drawer";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={MyDrawer}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
