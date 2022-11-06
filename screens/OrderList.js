import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Orderlistcart from "./Orderlistcart";
import { ordersList } from "../config/axios";
import { useSelector } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function OrderList() {
  const user = useSelector((state) => state.authReducer.user);
  const refresh = useSelector((state) => state.authReducer.refresh);
  const [refreshing, setRefreshing] = useState(false);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

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

  useEffect(() => {
    setloading(true);
    ordersList(`/${user.id}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch(() => {
        alert("Orders Not Found");
        setloading(false);
      });
  }, [refresh, refreshing]);

  return (
    <View>
      {loading ? (
        <View
          style={{
            textAlign: "center",
          }}
        >
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={renderFooter}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <Orderlistcart
                bookId={item?.book_id}
                status={item?.status}
                price={item?.price}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },
  costview: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFF",
    padding: 25,
    position: "absolute",
    width: 350,
    marginTop: -110,
    alignSelf: "center",
  },
  check: {
    padding: 5,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
    marginTop: 5,
    position: "absolute",
    width: 350,
    marginTop: -40,
    alignSelf: "center",
  },
  checktext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
