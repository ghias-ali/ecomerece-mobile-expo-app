import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CacheImage from "./caheimage";

export default function ListBook({ title, subTitle, image, onPress, Price }) {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.image44455}>
        <View>
          <CacheImage style={styles.image133} uri={image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.Price}>{Price}</Text>
          <View>
            <TouchableOpacity style={styles.btn12}>
              <Text style={styles.see}>See more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: -2,
    marginBottom: -6,
  },
  image44455: {
    flexDirection: "row",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "auto",
  },
  image133: {
    width: 135,
    height: 150,
  },
  title: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 23,
    color: "#515450",
    marginLeft: 8,
  },
  btn12: {
    padding: 1.5,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 10,
    marginLeft: 8,
  },
  see: {
    color: "white",
    textAlign: "center",
  },
});
