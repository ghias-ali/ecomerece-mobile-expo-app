import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, StyleSheet, RefreshControl, Text } from "react-native";
import ListItem from "./ListItems";
import { bookscat } from "../config/axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ProductsPage({ navigation }) {
  const [data, setdata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setloading(true);
    bookscat({
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
        setloading(false);
      })
      .catch(() => {
        alert("Products Load Faild");
        setloading(false);
      });
  }, [refreshing]);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
      {loading ? (
        <View style={{ alignSelf: "center" }}>
          <Text>Loading...</Text>
        </View>
      ) : (
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
      )}
    </RefreshControl>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
