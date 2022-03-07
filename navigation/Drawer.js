import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./BottomTabs";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
