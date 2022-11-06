import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import ListFav from "./ListFav";
import { getFav, deleteFav } from "../config/axios";
import { useSelector } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";

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

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View style={styles.footer}>
        {data.length === 0 ? (
          <View>
            <Text
              style={{ textAlign: "center", marginTop: 80, marginBottom: 20 }}
            >
              No Data Found
            </Text>
            <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={onRefresh}
            >
              <AntDesign name="reload1" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };
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
    <FlatList
      style={styles.list11}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(data) => data.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={renderFooter}
      renderItem={({ item }) => (
        <ListFav
          bookId={item.book_id}
          deleteBook={onClickDelete}
          idOfFav={item.id}
          navigation={navigation}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  list11: {
    marginBottom: 18,
  },
});
