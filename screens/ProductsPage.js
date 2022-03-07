import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";

const messages = [
  {
    id: 1,
    title: "Biology P1,P2 and P3",
    title1: "Physics P1 and 2",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/english.jpg")
  },
  {
    id: 2,
    title: "Mathematics P1,P2 & P3",
    title1: "Chemistry P1, P2 & P3",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/urdu.jpg")
  },
  {
    id: 3,
    title: "Mathematics P1 & P2",
    title1: "Physics P 1 and 2",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/islamiyt.jpg")
  },
  {
    id: 4,
    title: "Chemistry P 1 and 2",
    title1: "Pearson International ",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/pak.jpg")
  },
  {
    id: 5,
    title: "Pearson International ",
    title1: "Pearson International ",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/chemistry.jpg")
  },
  {
    id: 6,
    title: "Biology P1,P2 and P3",
    title1: "Physics P1 and 2",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/physics.jpg")
  },
  {
    id: 7,
    title: "Biology P1,P2 and P3",
    title1: "Physics P1 and 2",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/maths.jpg")
  },
  {
    id: 8,
    title: "Biology P1,P2 and P3",
    title1: "Physics P1 and 2",
    subTitle: " ",
    subTitle1: " ",
    image: require("../screens/Images/computer.jpg")
  }
];

export default function ProductsPage({ navigation }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          title1={item.title1}
          subTitle={item.subTitle}
          subTitle1={item.subTitle1}
          image={item.image}
          navigation={navigation}
        />
      )}
    />
  );
}
