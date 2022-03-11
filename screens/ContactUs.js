import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,TextInput } from "react-native";

export default function ContactUs({}) {
  const [text1, onChangeText1] = React.useState( );
  const [number, onChangeNumber] = React.useState( );
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.contact}>Feel free to connect with us</Text>
      </TouchableOpacity>
      <Text style={styles.contact1}>Open Hours: 09:00 A.M. 18.00 P.M</Text>
      <Text style={styles.contact2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, Nulla consequat massa quis enim. Donec pede justo
        ..
      </Text>
      <View style={styles.margin}>
      <TextInput
      style={styles.input}
      placeholder="First Name*"
      keyboardType="default"
      // onChangeText={onChangeText1}
      // value={text1}
    />
    <TextInput
      style={styles.input}
      placeholder="Last Name*"
      keyboardType="default"

      // onChangeText={onChangeText}
      // value={text1}
    />
    <TextInput
    style={styles.input}
    placeholder="Email*"
    keyboardType="email-address"
    // onChangeText={onChangeText}
    // value={text}
  />
  <TextInput
    style={styles.input}
    placeholder="Phone*"
    // onChangeText={onChangeNumber}
    value={number}
    keyboardType="numeric"
  />
  <TextInput
  style={styles.input1}
  placeholder="Messge*"
  keyboardType="default"s
  // onChangeText={onChangeNumber}
  
/>
      </View>
      <View>
      <TouchableOpacity style={styles.redbtnn}>
      <Text style={styles.contact4}>Send Messge</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  contact: {
    fontSize: 22,
    color: "#303030",
    textAlign: "center"
  },
  contact1: {
    fontSize: 16,
    color: "#F8BF2D",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "normal"
  },
  contact2:{
    fontSize: 15,
    color: "#303030",
    padding: 1,
    marginTop: 10,
  },
  margin:{
marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  input1:{
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  redbtnn:{
    width: 130,
    backgroundColor: "rgb(248,26,26)",
    alignSelf: "center",
    padding: 6,
    borderRadius: 15
   

  },
  contact4:{
color: "white",
textAlign: "center"
  }
});
