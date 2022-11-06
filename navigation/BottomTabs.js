import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsPage from "../screens/ProductsPage";
import CartPage from "../screens/CartPage";
import Pastpaper from "../screens/pastPaper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Feather name="book-open" color={color} size={size} />
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
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="page" color={color} size={size} />
          ),
        }}
        name="Past Paper"
        component={Pastpaper}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
