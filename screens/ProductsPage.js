import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ProductsPage({ navigation }) {
  const [data, setdata] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [board, setboard] = useState([]);
  const [category, setcategory] = useState([]);
  const [classes, setClasses] = useState([]);
  const [book, setbook] = useState([]);
  const [boardname, setboardname] = useState("");
  const [teachers, setteachers] = useState([]);
  const [flag, setflag] = useState(0);
  const [tempdata, settempdata] = useState([]);
  const [category_id, setcategory_id] = useState("");
  const [class_id, setclass_id] = useState("");
  const [books_id, setbooks_id] = useState("");
  const [teacher_id, setteacher_id] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

  const callApi = () => {
    let user1 = {
      board_id: boardname,
      category_id: category_id,
      class_id: class_id,
      books_id: books_id,
      teacher_id: teacher_id,
    };

    generalsearch({
      method: "post",
      data: user1,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setdata(res.data);
        setboardname("");
        setcategory_id("");
        setclass_id("");
        setbooks_id("");
        setteacher_id("");
        setcategory([]);
        setClasses([]);
        setbook([]);
        setteachers([]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function finalApply() {
    if (flag === 1) {
      setdata(tempdata);
      setVisible(false);
    }
    if (flag === 2) {
      callApi();
      setVisible(false);
    }
    if (flag === 3) {
      callApi();
      setVisible(false);
    }
    if (flag === 4) {
      callApi();
      setVisible(false);
    }
    if (flag === 5) {
      callApi();
      setVisible(false);
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const changeLabel = (bd) => {
    let array = [];

    for (let i = 0; i < bd.length; i++) {
      array.push({ label: bd[i].name, id: bd[i].id });
    }
    return array;
  };

  const changecatlabel = (bd) => {
    let array = [];
    for (let i = 0; i < bd.length; i++) {
      array.push({ label: bd[i] });
    }

    return array;
  };

  const onchangecomiledby = (item) => {
    setflag(5);
    setteacher_id(item.label);
  };

  const setclassdd = (bd) => {
    let array = [];

    for (let j = 0; j < bd.length; j++) {
      array.push(bd[j].class);
    }

    let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);

    return changecatlabel(unique);
  };

  function onChangeCategoryName(item) {
    setflag(2);

    setcategory_id(item.label);
  }

  function onChangeBoard(item) {
    setflag(1);
    setboardname(item.label);
    setcategory([]);
    setClasses([]);
    setbook([]);
    setteachers([]);
    onchangeboard(`${item.label}`, {
      method: "get",
    })
      .then((res) => {
        let cat = res.data.category;
        setClasses(setclassdd(res.data.class));

        let unique = cat.filter((item, i, ar) => ar.indexOf(item) === i);
        setcategory(changecatlabel(unique));
        settempdata(res.data.book);
      })
      .catch(() => {
        alert("board Load Faild");
      });
  }

  function changeclassunique(bd) {
    let array = [];

    for (let i = 0; i < bd.length; i++) {
      array.push(bd[i].name);
    }

    let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);

    return changecatlabel(unique);
  }
  function onChangeClass(item) {
    setflag(3);
    setclass_id(item.label);

    onchangeClass(`${boardname}/${item.label}`, {
      method: "get",
    })
      .then((res) => {
        setbook(changeclassunique(res.data));
      })
      .catch(() => {
        alert("class Load Faild");
      });
  }

  function onpressbookname(item) {
    setflag(4);
    setbooks_id(item.label);
    getTeachername(`${item.label}`, {
      method: "get",
    })
      .then((res) => {
        let arr = res.data;
        let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

        setteachers(changecatlabel(unique));
      })
      .catch(() => {
        alert("teacher load failed");
      });
  }
  const search = (rows) => {
    return rows.filter(
      rows?.name?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows?.auther?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows?.teacher?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows?.class?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows?.board?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows?.category?.toLowerCase().indexOf(searchQuery) > -1 ||
        rows.price?.indexOf(searchQuery) > -1
    );
  };
  useEffect(() => {
    setloading(true);
    bookscat({
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
        setboard(changeLabel(res.data.code));
        setloading(false);
      })
      .catch(() => {
        alert("Products Load Faild");
        setloading(false);
      });
  }, [refreshing]);

  return (
    <View>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
        <View>
          <View
            style={{
              marginTop: 5,
              padding: 5,
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
        </View>
      </RefreshControl>

      <View>
        {loading ? (
          <View style={{ alignSelf: "center" }}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 120 }}>
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
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Board</Text>
            </View>
            <View>
              <DropDownPicker
                items={board}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => onChangeBoard(item)}
              />
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Category</Text>
            </View>
            <View>
              <DropDownPicker
                items={category}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => onChangeCategoryName(item)}
              />
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Class</Text>
            </View>
            <View>
              <DropDownPicker
                items={classes}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => onChangeClass(item)}
              />
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Book</Text>
            </View>
            <View>
              <DropDownPicker
                items={book}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => onpressbookname(item)}
              />
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Compiled By</Text>
            </View>
            <View>
              <DropDownPicker
                items={teachers}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => onchangecomiledby(item)}
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
