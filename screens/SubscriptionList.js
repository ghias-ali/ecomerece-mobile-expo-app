import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function SubscriptionList(
  title,
  subTitle,
  image,
  price,
  id,
  navigation
) {
  return (
    <View style={styles.container}>
      <View style={styles.image4445}>
        <View>
          <Image
            style={styles.image133}
            source={{
              uri: "https://cdn3.vectorstock.com/i/1000x1000/23/77/book-icon-logo-vector-2982377.jpg",
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>{title("Three Day Pass")} </Text>
          <Text style={styles.subTitle}>Free Pass</Text>

          <Text style={styles.subTitle2}>Free Book Reading</Text>
          <Text style={styles.price}> Rs</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: -2,
    marginBottom: 10,
  },
  image4445: {
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
  subTitle2: {
    fontSize: 12,
    lineHeight: 23,
    color: "#515450",
    marginLeft: 8,
  },
  Price: {
    fontSize: 10,
    lineHeight: 23,
    color: "green",
    marginLeft: 8,
  },
  pusview: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 85,
  },
  no: {
    color: "grey",
    marginLeft: 5,
  },
  btn: {
    width: 60,
    padding: 2,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
    marginTop: 15,
  },
  price: {
    color: "green",
    fontSize: 20,
  },
});
