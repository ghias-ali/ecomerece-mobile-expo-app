import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsPage from "../screens/ProductsPage";
import CartPage from "../screens/CartPage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Products"
        component={ProductsPage}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={CartPage}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
