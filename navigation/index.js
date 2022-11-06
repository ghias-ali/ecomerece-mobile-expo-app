import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../auth/LoginPage";
import Signup from "../auth/SignupPage";
import MyDrawer from "./Drawer";
import ProductDetails from "../screens/ProductDetails";
import BookRead from "../screens/BookRead";
import { useSelector } from "react-redux";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../config/axios";
import { setUserData, setLoginState } from "../redux/actions";

import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    } else {
      setloading(false);
    }
  }

  const getValues = async () => {
    const email = await getValueFor("email");
    const password = await getValueFor("password");

    if (email && password) {
      login({
        method: "post",
        data: { email: email, password: password },
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          dispatch(setUserData(res.data.user));
          dispatch(setLoginState(true));
          setloading(false);
        })
        .catch(() => {
          setloading(false);
        });
    }
  };

  useEffect(() => {
    setloading(true);

    getValues();
  }, []);

  if (loading) {
    return (
      <View style={styles.footer}>
        <ActivityIndicator
          color="black"
          size={"large"}
          style={{ margin: 15 }}
        />
      </View>
    );
  } else {
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
  }
};

export default MyStack;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
