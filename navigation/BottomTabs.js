import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsPage from "../screens/ProductsPage";
import CartPage from "../screens/CartPage";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Coming soon!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/images.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
        name="Products"
        component={ProductsPage}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/cart.png")}
              style={{ width: 32, height: 32, marginTop: 1 }}
            />
          ),
        }}
        name="Cart"
        component={CartPage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/ser.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
