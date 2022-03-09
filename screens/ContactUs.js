import React from "react";
import { View, StyleSheet,  Text, TouchableOpacity } from "react-native";

export default function ContactUs({
  
}) {
  return (
    <View style={styles.container} >
      <TouchableOpacity>
      <Text style={styles.contact}>ContactUs</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  contact:{
      color: "black",
      textAlign: "center"
  }
});
