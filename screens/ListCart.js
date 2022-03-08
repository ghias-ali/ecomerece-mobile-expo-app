import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
// import Entypo from "react-native-vector-icons/Entypo";
import { bookDetail } from "../config/axios";

export default function ListCart({ bookId, deleteBook, idOfCart }) {
  const [data, setdata] = useState({});

  useEffect(() => {
    bookDetail(`${bookId}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
      })
      .catch(() => {
        alert("Email or Password is incorrect!");
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.image4445}>
        <View>
          <Image
            style={styles.image133}
            source={{
              uri: `https://kitabank.studentsresource.net/${data?.image}`,
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={styles.subTitle}>{data?.auther}</Text>
          <Text style={styles.Price}>
            {data?.price}
            {" Rs"}
          </Text>
          {/* <View style={styles.pusview}>
            <TouchableOpacity>
              <Entypo
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 25,
                  marginLeft: 8,
                }}
                name="circle-with-minus"
              />
            </TouchableOpacity>
            <Text style={styles.no}>1</Text>
            <TouchableOpacity>
              <Entypo
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 25,
                  marginLeft: 8,
                }}
                name="circle-with-plus"
              />
            </TouchableOpacity>
          </View> */}
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => deleteBook(idOfCart)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  alignSelf: "center",
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: -2,
    marginBottom: 10,
  },
  image4445: {
    flexDirection: "row",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "auto",
  },
  image133: {
    width: 135,
    height: 150,
  },
  title: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 23,
    color: "#515450",
    marginLeft: 8,
  },
  Price: {
    fontSize: 10,
    lineHeight: 23,
    color: "green",
    marginLeft: 8,
  },
  pusview: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 85,
  },
  no: {
    color: "grey",
    marginLeft: 5,
  },
  btn: {
    width: 60,
    padding: 2,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
    marginTop: 15,
  },
});
