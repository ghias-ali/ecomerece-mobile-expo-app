import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ListCart from "./ListCart";
const messages = [
  {
    id: 1,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Physics P1 and 2 ",
    Price: "1250 Rs",
    image: require("../screens/Images/english.jpg")
  },
  {
    id: 2,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 3,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 4,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 5,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 6,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 7,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    Price: "1250 Rs",
    image: require("../screens/Images/urdu.jpg")
  }
];

export default function CartPage({ navigation }) {
  return (
    <View>
      <FlatList
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListCart
            title={item.title}
            subTitle={item.subTitle}
            Price={item.Price}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.costview}>
          <Text>Total Cost:</Text>
          <Text>1250 Rs</Text>
        </View>

        <View style={styles.check}>
          <TouchableOpacity>
            <Text style={styles.checktext}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  costview: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFF",
    padding: 25,
    position: "absolute",
    width: 350,
    marginTop: -110,
    alignSelf: "center"
  },
  check: {
    padding: 5,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
    marginTop: 5,
    position: "absolute",
    width: 350,
    marginTop: -40,
    alignSelf: "center"
  },
  checktext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  list: {
    marginBottom: 112
  }
});
