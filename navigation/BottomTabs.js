import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsPage from "../screens/ProductsPage";
import CartPage from "../screens/CartPage"

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Products"
        component={ProductsPage}
      />
      <Tab.Screen
      options={{ headerShown: false }}
      name="Cart"
      component={CartPage}
    />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
