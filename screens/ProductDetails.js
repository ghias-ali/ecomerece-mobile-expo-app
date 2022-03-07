import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function ProductDetails({}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container22}>
        <View>
          <Image
            style={styles.eng}
            source={require("./Images/english.jpg")}
          ></Image>
        </View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext}>Teacher</Text>
          <Text style={styles.teachertext1}>Student Resource</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext2}>About Auther</Text>
          <Text style={styles.teachertext1}>Student Resource</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.teacherview}>
          <Text style={styles.teachertext}>Price</Text>
          <Text style={styles.teachertext444}>1250 Rs</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.addveiw}>
          <TouchableOpacity style={styles.cartbtn}>
            <View style={styles.cartttt}>
              <Text style={styles.add}>Add to cart</Text>
              <FontAwesome
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 20,
                  marginLeft: 5
                }}
                name="cart-plus"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartbtn}>
            <View style={styles.cartttt}>
              <Text style={styles.add}>Favourite</Text>
              <AntDesign
                style={{
                  color: "rgb(255,79,129)",
                  fontSize: 20,
                  marginLeft: 5
                }}
                name="heart"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bookkview}>
          <Text style={styles.teachertext}>Book Description</Text>
          <Text style={styles.teachertext1}>
            AQA Past Papers Series (A Level)
          </Text>
          <Text style={styles.teachertext1}>
            Subject : AQA A-Level Biology 7402 P1, P2 and P3 Past Papers
          </Text>
          <Text style={styles.teachertext1}>
            Description : Paper 1 and 2 (3 Question Papers each; Total 9)
          </Text>
          <Text style={styles.teachertext1}>
            Patter : Paper 1 and Paper 2 with Mark Scheme
          </Text>
          <Text style={styles.teachertext1}>
            Years : June 2019 | June 2018 | June 2017
          </Text>
          <Text style={styles.teachertext1}>Print length : xxx pages7</Text>
          <Text style={styles.teachertext1}>
            Available to ship in: 24 hours in Lahore and 36-72 hours for Other
            Citie
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container22: {
    padding: 5
  },
  eng: {
    width: 300,
    height: 250,
    alignSelf: "center"
  },
  teacherview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15
  },
  teachertext: {
    fontSize: 16,
    color: "rgb(48,48,48)",
    fontWeight: "bold"
  },
  teachertext1: {
    fontSize: 13,
    color: "rgb(139,139,139)"
  },
  teachertext2: {
    fontSize: 16,
    color: "rgb(48,48,48)",
    fontWeight: "bold"
  },
  teachertext444: {
    color: "green"
  },
  bookkview: {
    marginTop: 8,
    textAlign: "center",
    padding: 2
  },
  line: {
    borderWidth: 0.5,
    borderColor: "grey",
    margin: 8
  },
  addveiw: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  cartbtn: {
    borderWidth: 1,
    borderColor: "rgb(255,79,129)",
    borderRadius: 5,
    padding: 5
  },
  add: {
    color: "rgb(255,79,129)"
  },
  scrollView: {
    marginHorizontal: 15
  },
  cartttt: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
