import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "./ListItems";
import { bookscat } from "../config/axios";

export default function ProductsPage({ navigation }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    bookscat({
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
      })
      .catch(() => {
        alert("Email or Password is incorrect!");
      });
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(data) => data.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <ListItem
            title={item.name}
            subTitle={item.teacher}
            image={item.image}
            price={item.price}
            id={item.id}
            navigation={navigation}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
