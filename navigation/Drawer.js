import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./BottomTabs";
import Favourite from "../screens/Favourite";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import OrderList from "../screens/OrderList";
import Subscription from "../screens/Subscription";
import * as SecureStore from "expo-secure-store";
import { setLoginState } from "../redux/actions";
import { useDispatch } from "react-redux";

const Drawer = createDrawerNavigator();

function Logout() {
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  // const deletekeys = async =()=>{

  // }

  useEffect(() => {
    setloading(true);
    SecureStore.deleteItemAsync("email");
    SecureStore.deleteItemAsync("password");

    dispatch(setLoginState(false));
  }, []);

  return (
    <View>
      {loading && (
        <View style={styles.footer}>
          <ActivityIndicator
            color="black"
            size={"large"}
            style={{ margin: 15 }}
          />
        </View>
      )}
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="My Order" component={OrderList} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
