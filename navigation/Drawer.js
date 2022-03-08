import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./BottomTabs";
import Favourite from "../screens/Favourite";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Favourite" component={Favourite} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
