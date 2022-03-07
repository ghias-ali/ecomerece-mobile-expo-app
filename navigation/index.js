import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginPage";
import Signup from "../auth/SignupPage";
import MyDrawer from "./Drawer";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home1"
        component={MyDrawer}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
