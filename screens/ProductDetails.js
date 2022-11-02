import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { bookDetail, addToFav } from "../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { setRefreshFav } from "../redux/actions";
import htmlToFormattedText from "html-to-formatted-text";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CacheImage from "./caheimage";

export default function ProductDetails({ route, navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  const refreshfav = useSelector((state) => state.authReducer.refreshfav);

  const { id } = route.params;

  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);

  const onAddtoFav = () => {
    addToFav(`${id}/${user.id}`, {
      method: "post",
    })
      .then(() => {
        dispatch(setRefreshFav(!refreshfav));

        navigation.navigate("Favourite");
      })
      .catch(() => {
        alert("Add to Favourites error");
      });
  };

  useEffect(() => {
    setloading(true);
    bookDetail(`${id}`, {
      method: "get",
    })
      .then((res) => {
        setdata(res.data.book);
        setloading(false);
      })
      .catch(() => {
        alert("book detail error");
        setloading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container22}>
        {!loading && (
          <View>
            <CacheImage
              style={styles.eng}
              uri={`https://kitabank.studentsresource.net/${data.image}`}
            />
          </View>
        )}

        <View style={styles.teacherview}>
          <Text style={styles.teachertext}>Name</Text>
          <Text style={styles.teachertext1}>{data.name}</Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.teacherview}>
          <Text style={styles.teachertext}>Teacher</Text>
          <Text style={styles.teachertext1}>{data.teacher}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext2}>About Auther</Text>
          <Text style={styles.teachertext1}>{data.auther}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext2}>Class</Text>
          <Text style={styles.teachertext1}>{data.class}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext2}>Category</Text>
          <Text style={styles.teachertext1}>{data.category}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext2}>Code</Text>
          <Text style={styles.teachertext1}>{data.code}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext}>Price</Text>
          <Text style={styles.teachertext444}>
            {data.price}
            {" Rs"}
          </Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.addveiw}>
          <TouchableOpacity
            style={styles.cartbtn}
            onPress={() => navigation.navigate("Cart")}
          >
            <View style={styles.cartttt}>
              <Text style={styles.add}>Add to cart</Text>
              <FontAwesome
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 20,
                  marginLeft: 5,
                }}
                name="cart-plus"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartbtn} onPress={() => onAddtoFav()}>
            <View style={styles.cartttt}>
              <Text style={styles.add}>Favourite</Text>
              <AntDesign
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 20,
                  marginLeft: 5,
                }}
                name="heart"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookkview}>
          <Text style={styles.teachertext}>Book Description</Text>
          <Text style={styles.teachertext1}>
            {htmlToFormattedText(data.description)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container22: {
    padding: 15,
  },
  eng: {
    width: 300,
    height: 250,
    alignSelf: "center",
  },
  teacherview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  teachertext: {
    fontSize: 16,
    color: "rgb(48,48,48)",
    fontWeight: "bold",
  },
  teachertext1: {
    fontSize: 13,
    color: "rgb(139,139,139)",
  },
  teachertext2: {
    fontSize: 16,
    color: "rgb(48,48,48)",
    fontWeight: "bold",
  },
  teachertext444: {
    color: "green",
  },
  bookkview: {
    marginTop: 8,
    textAlign: "center",
    padding: 2,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "grey",
    marginTop: 8,
    marginBottom: 8,
  },
  addveiw: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cartbtn: {
    borderWidth: 1,
    borderColor: "rgb(255,79,129)",
    borderRadius: 5,
    padding: 5,
  },
  add: {
    color: "rgb(255,79,129)",
  },
  scrollView: {
    // marginHorizontal: 10,
  },
  cartttt: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
