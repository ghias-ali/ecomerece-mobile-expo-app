import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  TextInput,
} from "react-native";
import ListCart from "./ListCart";
import { cart } from "../config/axios";
import { useSelector } from "react-redux";
import { cartDelete, checkout } from "../config/axios";
import { Modal, Portal, Provider } from "react-native-paper";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function CartPage({ navigation }) {
  const user = useSelector((state) => state.authReducer.user);
  const refresh = useSelector((state) => state.authReducer.refresh);
  const [refreshing, setRefreshing] = useState(false);

  const [data, setdata] = useState([]);
  const [totalprice, settotalprice] = useState(0);
  const [updated, setupdated] = useState(false);
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");

  const showModal = () => {
    if (data.length > 0) {
      setVisible(true);
    }
  };
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onProceedorder = () => {
    let ids = [];

    data.filter((e) => ids.push(e.id.toString()));
    let data1 = {
      cart: ids,
      name: user?.name,
      email: user?.email,
      number: number === "" ? user?.number : number,
      address: address === "" ? user?.address : address,
      city: city === "" ? user?.city : city,
    };

    checkout({
      method: "POST",
      data: data1,
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        hideModal();
        setupdated(!updated);
      })
      .catch((err) => {
        alert("delet cart error");
        console.log(err);
      });
  };

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
        <View style={{ height: "100%" }}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(data) => data.id.toString()}
            renderItem={({ item }) => (
              <ListCart
                bookId={item.book_id}
                navigation={navigation}
                deleteBook={onClickDelete}
                idOfCart={item.id}
              />
            )}
          />
          <View style={styles.container}>
            <View style={styles.costview}>
              <Text>Total Cost:</Text>
              <Text>{totalprice} Rs</Text>
            </View>

            <View style={styles.check}>
              <TouchableOpacity onPress={showModal}>
                <Text style={styles.checktext}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={{ padding: 10, borderRadius: 0 }}
          >
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
                marginBottom: 15,
              }}
            >
              Please Enter Order Details!
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "green",
                fontSize: 24,
              }}
            >
              {totalprice} Rs
            </Text>
            <Text style={{ fontWeight: "bold" }}>Name: {user?.name}</Text>
            <Text style={{ fontWeight: "bold" }}>Email: {user?.email}</Text>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Phone: {user?.number}</Text>
              <Text style={{ color: "#777777" }}>You can add new Number</Text>

              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value={number}
                placeholder={user?.number}
                onChangeText={(text) => {
                  setnumber(text);
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>
                Address: {user?.address}
              </Text>
              <Text style={{ color: "#777777" }}>You can add new Address</Text>
              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value={address}
                placeholder={user?.address}
                onChangeText={(text) => {
                  setaddress(text);
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>City: {user?.city}</Text>
              <Text style={{ color: "#777777" }}>You can add new City</Text>
              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value={city}
                placeholder={user?.city}
                onChangeText={(text) => {
                  setcity(text);
                }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(248,26,26)",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }} onPress={onProceedorder}>
                  Proceed Order
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </Provider>
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
  list: {
    marginBottom: 112,
  },
});
