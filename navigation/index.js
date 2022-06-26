import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginPage";
import Signup from "../auth/SignupPage";
import MyDrawer from "./Drawer";
import ProductDetails from "../screens/ProductDetails";
import BookRead from "../screens/BookRead";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  if (isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home1"
          component={MyDrawer}
        />
        <Stack.Screen name="Read" component={BookRead} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={Signup} />
      </Stack.Navigator>
    );
  }
};

export default MyStack;
