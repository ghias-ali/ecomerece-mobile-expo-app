import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { bookDetail } from "../config/axios";

export default function OrdeListCart({ bookId, status, price }) {
  const [data, setdata] = useState({});

  useEffect(() => {
    bookDetail(`${bookId}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
      })
      .catch(() => {
        alert("Book cannot Fetch");
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

          <Text style={styles.subTitle2}>{status}</Text>
          <Text style={styles.price}>{price} Rs</Text>
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
  subTitle2: {
    fontSize: 12,
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
  price: {
    color: "green",
    fontSize: 20,
  },
});
