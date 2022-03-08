import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addToCart } from "../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { setRefreshdata } from "../redux/actions";

export default function ListItem({
  title,
  subTitle,
  image,
  price,
  id,
  navigation,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  const refresh = useSelector((state) => state.authReducer.refresh);

  const addtocart = () => {
    addToCart(`${id}/${user.id}`, {
      method: "post",
    })
      .then((res) => {
        console.log("added");
        dispatch(setRefreshdata(!refresh));
      })
      .catch(() => {
        alert("add to cart error");
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.back}>
          <Image
            style={styles.image}
            source={{
              uri: `https://kitabank.studentsresource.net/${image}`,
            }}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <View style={styles.btndiv}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.red}>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("ProductDetails", { id: id })}
            >
              <Text style={styles.red}>Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cartdiv}>
            <Text style={styles.title1}>
              {price}
              {" Rs"}
            </Text>
            <TouchableOpacity onPress={() => addtocart()}>
              <FontAwesome
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 25,
                }}
                name="cart-plus"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
  },
  container22: {
    marginTop: 20,
  },

  image: {
    width: 145,
    height: 140,
    alignSelf: "center",
  },
  title: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    // margin: 5,
    marginTop: 5,
  },
  title1: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    // margin: 5,
    marginTop: 5,
    color: "green",
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 30,
    marginTop: -5,
    color: "#515450",
  },
  back: {
    backgroundColor: "#FFFFFF",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "auto",
    width: 150,
    padding: 10,
  },
  btn: {
    width: 50,
    padding: 2,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 10,
  },
  btndiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  red: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
  },
  cartdiv: {
    borderTopColor: "gray",
    borderWidth: 0.2,
    marginTop: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
