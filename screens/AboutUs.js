import React from "react";
import { View, StyleSheet,  Text, TouchableOpacity } from "react-native";

export default function AboutUs({
  
}) {
  return (
    <View style={styles.container}  >
      <TouchableOpacity>
      <Text style={styles.about}>AboutUs</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  about:{
      color: "black",
      textAlign: "center"
  }
});
 