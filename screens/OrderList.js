import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Orderlistcart from "./Orderlistcart";
import { cart } from "../config/axios";
import { useSelector } from "react-redux";
import { cartDelete } from "../config/axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function OrderList({ navigation }) {
  const user = useSelector((state) => state.authReducer.user);
  const refresh = useSelector((state) => state.authReducer.refresh);
  const [refreshing, setRefreshing] = useState(false);

  const [data, setdata] = useState([]);
  const [totalprice, settotalprice] = useState(0);
  const [updated, setupdated] = useState(false);
  const [loading, setloading] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onClickDelete = (id) => {
    cartDelete(`${id}`, {})
      .then(() => {
        setupdated(!updated);
      })
      .catch(() => {
        alert("delet cart error");
      });
  };

  useEffect(() => {
    setloading(true);
    cart(`${user.id}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.list);
        let arr = res.data.list;
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
          sum = parseInt(arr[j].price) + sum;
        }

        settotalprice(sum);
        setloading(false);
      })
      .catch(() => {
        alert("Cart Not Found");
        setloading(false);
      });
  }, [updated, refresh, refreshing]);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
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
              style={styles.list}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <Orderlistcart
                  bookId={item.book_id}
                  navigation={navigation}
                  deleteBook={onClickDelete}
                  idOfCart={item.id}
                />
              )}
            />
          </View>
        )}
      </View>
    </RefreshControl>
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
  list: {
    marginBottom: 112,
  },
});
