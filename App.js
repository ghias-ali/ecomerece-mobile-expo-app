import React from "react";
import MyStack from "./navigation/index";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProductsPage from "./screens/ProductsPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
