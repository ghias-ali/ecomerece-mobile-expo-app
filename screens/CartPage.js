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

];

export default function CartPage({ navigation }) {
  return (
    <ScrollView>
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
      </View>
      <View style={styles.check}>
        <TouchableOpacity>
          <Text style={styles.checktext}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: -4
  },
  costview: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFF",
    padding: 25
  },
  check: {
    padding: 5,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
   
    
  },
  checktext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  list: {
    marginBottom: 10
  }
});
