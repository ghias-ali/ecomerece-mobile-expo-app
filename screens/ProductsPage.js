import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import ListItem from "./ListItems";
import { bookscat, generalsearch, getteacherbook } from "../config/axios";
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
  const [bookCopy, setbookCopy] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);
  const [filterapplied, setfilterapplied] = useState(false);
  const [teacherapplied, setteacherapplied] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [board, setboard] = useState([]);
  const [category, setcategory] = useState([]);
  const [classes, setClasses] = useState([]);
  const [books, setbooks] = useState([]);
  const [compiledby, setcompiledby] = useState([]);
  const [teachers, setteachers] = useState([]);
  const [boardname, setboardname] = useState(null);
  const [categoryname, setcategoryname] = useState(null);
  const [classesname, setclassesname] = useState(null);
  const [booksname, setbooksname] = useState(null);
  const [compiledbyname, setcompiledbyname] = useState(null);
  const [teachername, setteachername] = useState(null);

  const [boardDrop, setboardDrop] = useState(false);
  const [categoryDrop, setcategoryDrop] = useState(false);
  const [classesdrop, setclassesdrop] = useState(false);
  const [booksdrop, setbooksdrop] = useState(false);
  const [compiledbydrop, setcompiledbydrop] = useState(false);
  const [teacherdrop, setteacherdrop] = useState(false);

  const [dimensions, setDimensions] = useState(screen);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

  function finalApply() {
    setloading(true);
    setVisible(false);
    setfilterapplied(true);

    generalsearch({
      method: "post",
      params: {
        board_id: boardname !== null ? boardname : null,
        category_id: categoryname !== null ? categoryname : null,
        class_id: classesname !== null ? classesname : null,
        books_id: booksname !== null ? booksname : null,
        teacher_id: compiledbyname !== null ? compiledbyname : null,
      },
    })
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch(() => {
        alert("Products Load Faild");
        setloading(false);
      });
  }

  const onRefresh = useCallback(() => {
    setteachername(null);
    setfilterapplied(false);
    setteacherapplied(false);
    setRefreshing(true);
    setdata([]);
    setOffset(1);
    setIsListEnd(false);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const changeLabel = (bd) => {
    let array = [];

    for (let i = 0; i < bd.length; i++) {
      array.push({ label: bd[i].title, value: bd[i].title });
    }
    return array;
  };

  // const search = (rows) => {
  //   return rows?.filter(function (rows) {
  //     return (
  //       rows?.name?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows?.auther?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows?.teacher?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows?.class?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows?.board?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows?.category?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
  //       rows.price?.indexOf(searchQuery.toLowerCase()) > -1
  //     );
  //   });
  // };

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  const getData = () => {
    let teachers = [];
    let final = [];
    if (!filterapplied && !teacherapplied) {
      if (!loading && !isListEnd) {
        setloading(true);
        setVisible(false);
        bookscat({
          method: "get",
          params: {
            page: offset,
          },
        })
          .then((res) => {
            if (res.data.book.data.length > 0) {
              setOffset(offset + 1);
              setdata([...data, ...res.data.book.data]);
              setboard(changeLabel(FilterData));
              for (let i = 0; i < res.data.teacher?.length; i++) {
                teachers.push(res.data.teacher[i]?.name);
              }
              let unique = teachers.filter(
                (item, i, ar) => ar.indexOf(item) === i
              );

              unique.forEach((element) => {
                final.push({
                  label: element,
                  value: element,
                });
              });

              setteachers(final);

              setloading(false);
            } else {
              setIsListEnd(true);
              setloading(false);
            }
          })
          .catch(() => {
            alert("Products Load Faild");
            setloading(false);
          });
      }
    }
  };

  useEffect(() => {
    getData();
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
    setClasses([]);
    setcategory([]);

    let category = [];
    let classes = [];

    let books = [];
    let allbook = [];

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

    generalsearch({
      method: "post",
      params: {
        board_id: boardname !== null ? boardname : null,
      },
    })
      .then((res) => {
        setbookCopy(res.data);

        for (let i = 0; i < res?.data?.length; i++) {
          allbook.push(res.data[i].name);
        }

        let unique = allbook.filter((item, i, ar) => ar.indexOf(item) === i);

        unique.forEach((element) => {
          books.push({
            label: element,
            value: element,
          });
        });
        setbooks(books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [boardname]);

  useEffect(() => {
    let datacopy = bookCopy;
    let compiledby = [];
    let finalcompileby = [];

    for (let i = 0; i < datacopy.length; i++) {
      if (datacopy[i].class === classesname) {
        compiledby.push(datacopy[i].name);
      }
    }

    let unique = compiledby.filter((item, i, ar) => ar.indexOf(item) === i);

    unique.forEach((element) => {
      finalcompileby.push({
        label: element,
        value: element,
      });
    });

    setbooks(finalcompileby);
  }, [classesname]);

  useEffect(() => {
    let datacopy = bookCopy;
    let compiledby = [];
    let finalcompileby = [];

    for (let i = 0; i < datacopy.length; i++) {
      if (datacopy[i].name === booksname) {
        compiledby.push(datacopy[i].teacher);
      }
    }

    let unique = compiledby.filter((item, i, ar) => ar.indexOf(item) === i);

    unique.forEach((element) => {
      finalcompileby.push({
        label: element,
        value: element,
      });
    });

    setcompiledby(finalcompileby);
  }, [booksname]);

  useEffect(() => {
    if (teachername !== null) {
      getteacherbook({
        method: "post",
        params: {
          teacher_name: teachername !== null ? teachername : null,
        },
      })
        .then((res) => {
          setdata(res.data);
          setteacherapplied(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [teachername]);

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
          <DropDownPicker
            style={{ border: 0, borderWidth: 0 }}
            searchable={true}
            open={teacherdrop}
            value={teachername}
            items={teachers}
            setOpen={setteacherdrop}
            setValue={setteachername}
            setItems={setteachers}
            containerStyle={{
              height: 50,
              width: "85%",
            }}
            zIndex={7000}
            zIndexInverse={1000}
            placeholder="Search by Teacher"
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
      {data.length !== 0 ? (
        <View>
          <View style={{ marginBottom: 120 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(data) => data.id.toString()}
              numColumns={2}
              ListFooterComponent={renderFooter}
              onEndReached={getData}
              onEndReachedThreshold={0.5}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => (
                <View>
                  <ListItem
                    title={item.web_name}
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
        </View>
      ) : (
        <View>
          <Text
            style={{ textAlign: "center", marginTop: 80, marginBottom: 20 }}
          >
            No Data Found
          </Text>
          <TouchableOpacity style={{ alignSelf: "center" }} onPress={onRefresh}>
            <AntDesign name="reload1" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}

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
                zIndex={6000}
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
                zIndex={5000}
                zIndexInverse={2000}
              />
            </View>

            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Classes</Text>
            </View>
            <View>
              <DropDownPicker
                open={classesdrop}
                value={classesname}
                items={classes}
                setOpen={setclassesdrop}
                setValue={setclassesname}
                setItems={setClasses}
                containerStyle={{ height: 50 }}
                zIndex={4000}
                zIndexInverse={3000}
              />
            </View>

            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Books</Text>
            </View>
            <View>
              <DropDownPicker
                open={booksdrop}
                value={booksname}
                items={books}
                setOpen={setbooksdrop}
                setValue={setbooksname}
                setItems={setbooks}
                containerStyle={{ height: 50 }}
                maxHeight={150}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>

            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Complied By</Text>
            </View>
            <View>
              <DropDownPicker
                open={compiledbydrop}
                value={compiledbyname}
                items={compiledby}
                setOpen={setcompiledbydrop}
                setValue={setcompiledbyname}
                setItems={setcompiledby}
                containerStyle={{ height: 50 }}
                zIndex={2000}
                zIndexInverse={6000}
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

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
