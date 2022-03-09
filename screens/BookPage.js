import React from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import ListBook from "./ListBook";
const messages = [
  {
    id: 1,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Physics P1 and 2 ",
    image: require("../screens/Images/english.jpg")
  },
  {
    id: 2,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 3,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 4,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 5,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 6,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 7,
    title: "Mathematics P1,P2 & P3",
    subTitle: "Chemistry P1, P2 & P3 ",
    image: require("../screens/Images/urdu.jpg")
  }
];

export default function BookPage({ navigation }) {
  return (
   
      <FlatList
        style={styles.list11}
        showsHorizontalScrollIndicator={false}
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListBook
            title={item.title}
            subTitle={item.subTitle}
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
