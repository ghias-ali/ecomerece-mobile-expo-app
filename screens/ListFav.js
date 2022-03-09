import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { bookDetail } from "../config/axios";

export default function ListFav({ bookId, deleteBook, idOfFav }) {
  const [data, setdata] = useState({});

  useEffect(() => {
    bookDetail(`${bookId}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
      })
      .catch(() => {
        alert("get book error");
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.image44455}>
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
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => deleteBook(idOfFav)}
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
    marginBottom: -6,
  },
  image44455: {
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
  btn: {
    width: 60,
    padding: 2,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 5,
    marginTop: 15,
  },
});
