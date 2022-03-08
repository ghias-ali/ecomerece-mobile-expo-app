import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ListCart({
  title,
  subTitle,
  image,
  onPress,
  Price,
  navigation
}) {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.image4445}>
        <View>
          <Image style={styles.image133} source={image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.Price}>{Price}</Text>
          <View style={styles.pusview}>
            <TouchableOpacity>
              <Entypo
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 25,
                  marginLeft: 8
                }}
                name="circle-with-minus"
              />
            </TouchableOpacity>
            <Text style={styles.no}>1</Text>
            <TouchableOpacity>
              <Entypo
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 25,
                  marginLeft: 8
                }}
                name="circle-with-plus"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <AntDesign
                style={{
                  color: "rgb(248,26,26)",
                  fontSize: 20,
                  marginLeft: 8,
                  position: "absolute",
                  marginTop: 40
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
  image4445: {
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
  },
  pusview: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 85
  },
  no: {
    color: "grey",
    marginLeft: 5
  }
});
