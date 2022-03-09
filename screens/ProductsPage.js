import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ListItem from "./ListItems";
import { bookscat } from "../config/axios";
import { Modal, Portal, Provider } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ProductsPage({ navigation }) {
  const [data, setdata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

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
      <View
        style={{
          marginTop: 5,
          padding: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "white",
            padding: 4,
            height: 45,
            width: "75%",
            borderRadius: 4,
          }}
          placeholder="Search"
          placeholderTextColor="#003f5c"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "white", padding: 13, borderRadius: 2 }}
          onPress={showModal}
        >
          <AntDesign
            style={{
              color: "rgb(255,79,129)",
              fontSize: 20,
            }}
            name="filter"
          />
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <View style={{ alignSelf: "center" }}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(data) => data.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <View>
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
          </View>
        )}
      </View>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View style={{ alignSelf: "center", marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Apply Filter
              </Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Board</Text>
            </View>
            <View>
              <DropDownPicker
                items={[
                  { label: "English", value: "en" },
                  { label: "Deutsch", value: "de" },
                  { label: "French", value: "fr" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => console.log(item.label, item.value)}
              />
            </View>
          </Modal>
        </Portal>
      </Provider>
    </RefreshControl>
  );
}
