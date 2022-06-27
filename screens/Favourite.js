import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import ListFav from "./ListFav";
import { getFav, deleteFav } from "../config/axios";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function Favourite({ navigation }) {
  const user = useSelector((state) => state.authReducer.user);
  const refreshfav = useSelector((state) => state.authReducer.refreshfav);

  const [data, setdata] = useState([]);
  const [updated, setupdated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onClickDelete = (id) => {
    deleteFav(`${id}`, {})
      .then(() => {
        setupdated(!updated);
      })
      .catch(() => {
        alert("delet cart error");
      });
  };

  useEffect(() => {
    getFav(`${user.id}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.list);
      })
      .catch(() => {
        alert("Favourites error");
      });
  }, [updated, refreshing, refreshfav]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
          <FlatList
            style={styles.list11}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ListFav
                bookId={item.book_id}
                deleteBook={onClickDelete}
                idOfFav={item.id}
                navigation={navigation}
              />
            )}
          />
        </RefreshControl>
      }
    />
  );
}
const styles = StyleSheet.create({
  list11: {
    marginBottom: 18,
  },
});
