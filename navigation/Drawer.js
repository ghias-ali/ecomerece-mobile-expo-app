import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./BottomTabs";
import Favourite from "../screens/Favourite";
// import BookPage from "../screens/BookPage";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      {/* <Drawer.Screen name="Books" component={BookPage} /> */}
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
