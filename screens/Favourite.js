import React from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import ListFav from "./ListFav";
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

export default function Favourite({ navigation }) {
  return (
   
      <FlatList
        style={styles.list11}
        showsHorizontalScrollIndicator={false}
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListFav
            title={item.title}
            subTitle={item.subTitle}
            Price={item.Price}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
   
  );
}
const styles = StyleSheet.create({
  list11: {
    marginBottom: 18
  }
});
