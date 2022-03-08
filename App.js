import React from "react";
import MyStack from "./navigation/index";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <MyStack />
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
