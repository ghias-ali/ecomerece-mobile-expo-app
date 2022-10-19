import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ListItem from "./ListItems";
import {
  bookscat,
  onchangeboard,
  onchangeClass,
  getTeachername,
  generalsearch,
} from "../config/axios";
import { Modal, Portal, Provider } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";
import FilterData from "../assets/database/filters.json";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const screen = Dimensions.get("screen");

export default function ProductsPage({ navigation }) {
  const [data, setdata] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [board, setboard] = useState([]);
  const [category, setcategory] = useState([]);
  const [classes, setClasses] = useState([]);
  const [boardname, setboardname] = useState(null);
  const [categoryname, setcategoryname] = useState(null);

  const [boardDrop, setboardDrop] = useState(false);
  const [categoryDrop, setcategoryDrop] = useState(false);

  const [dimensions, setDimensions] = useState(screen);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

  function finalApply() {
    console.log("clicked");
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const changeLabel = (bd) => {
    let array = [];

    for (let i = 0; i < bd.length; i++) {
      array.push({ label: bd[i].title, value: bd[i].title });
    }
    return array;
  };

  function onChangeBoard(item) {
    setboardname(item.label);
  }

  const search = (rows) => {
    return rows?.filter(function (rows) {
      return (
        rows?.name?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows?.auther?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows?.teacher?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows?.class?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows?.board?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows?.category?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        rows.price?.indexOf(searchQuery.toLowerCase()) > -1
      );
    });
  };

  useEffect(() => {
    setloading(true);
    setVisible(false);
    bookscat({
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
        setboard(changeLabel(FilterData));
        setloading(false);
      })
      .catch(() => {
        alert("Products Load Faild");
        setloading(false);
      });
  }, [refreshing]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions(screen);
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    console.log(boardname);
    setClasses([]);
    setcategory([]);

    let category = [];
    let classes = [];

    for (let i = 0; i < FilterData.length; i++) {
      if (FilterData[i].title === boardname) {
        for (let j = 0; j < FilterData[i].category.length; j++) {
          category.push({
            label: FilterData[i].category[j],
            value: FilterData[i].category[j],
          });
        }
        for (let k = 0; k < FilterData[i].class.length; k++) {
          classes.push({
            label: FilterData[i].class[k],
            value: FilterData[i].class[k],
          });
        }

        setClasses(classes);

        setcategory(category);

        break;
      }
    }
  }, [boardname]);

  return (
    <View>
      <View style={{ width: dimensions.width, marginTop: 5, padding: 5 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              padding: 4,
              height: 45,
              width: "85%",
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
            style={{ backgroundColor: "white", padding: 12, borderRadius: 2 }}
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
      </View>

      <View>
        {loading ? (
          <View style={{ alignSelf: "center" }}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 120 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={search(data)}
              keyExtractor={(data) => data.id.toString()}
              numColumns={2}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
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
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Board</Text>
            </View>
            <View>
              <DropDownPicker
                open={boardDrop}
                value={boardname}
                items={board}
                setOpen={setboardDrop}
                setValue={setboardname}
                setItems={setboard}
                containerStyle={{ height: 50 }}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>

            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Category</Text>
            </View>
            <View>
              <DropDownPicker
                open={categoryDrop}
                value={categoryname}
                items={category}
                setOpen={setcategoryDrop}
                setValue={setcategoryname}
                setItems={setcategory}
                containerStyle={{ height: 50 }}
                zIndex={2000}
                zIndexInverse={2000}
              />
            </View>

            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Classes</Text>
            </View>
            <View>
              <DropDownPicker
                open={categoryDrop}
                value={categoryname}
                items={category}
                setOpen={setcategoryDrop}
                setValue={setcategoryname}
                setItems={setcategory}
                containerStyle={{ height: 50 }}
                zIndex={1000}
                zIndexInverse={3000}
              />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(255,79,129)",
                  padding: 13,
                  borderRadius: 5,
                  width: 100,
                  alignSelf: "center",
                  marginTop: 10,
                }}
                onPress={finalApply}
              >
                <Text style={{ color: "white", alignSelf: "center" }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}
