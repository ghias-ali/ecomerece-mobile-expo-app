import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ListFav({
  title,
  subTitle,
  image,
  onPress,
  Price,
  navigation
}) {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.image44455}>
        <View>
          <Image style={styles.image133} source={image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.Price}>{Price}</Text>
          <View>
            <TouchableOpacity>
              <AntDesign
                style={{
                  color: "rgb(248,26,26)",
                  fontSize: 20,
                  marginLeft: 8,
                  position: "absolute",
                  marginTop: 20
                }}
                name="delete"
              />
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
    marginBottom: -6
  },
  image44455: {
    flexDirection: "row",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "auto"
  },
  image133: {
    width: 135,
    height: 150
  },
  title: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8,
    marginTop: 10
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 23,
    color: "#515450",
    marginLeft: 8
  },
  Price: {
    fontSize: 10,
    lineHeight: 23,
    color: "green",
    marginLeft: 8
  }
});
