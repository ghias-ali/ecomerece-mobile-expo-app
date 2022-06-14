import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./BottomTabs";
import Favourite from "../screens/Favourite";
// import BookPage from "../screens/BookPage";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import OrderList from "../screens/OrderList";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="My Order" component={OrderList} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
