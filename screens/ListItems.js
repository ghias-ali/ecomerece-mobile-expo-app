import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity
} from "react-native";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  title1,
  subTitle1
}) {
  return (
    <SafeAreaView  >
   
      <View style={styles.container} onPress={onPress}>
        <View style={styles.image444}>
          <View style={styles.back}>
            <Image style={styles.image}  source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <View style={styles.btndiv}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.red}>Read</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.red}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.back}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>{title1}</Text>
            <Text style={styles.subTitle}>{subTitle1}</Text>
            <View style={styles.btndiv}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.red}>Read</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.red}>Details</Text>
              </TouchableOpacity>
            </View>
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
  container22:{
marginTop: 20
  },
  image444: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 145,
    height: 140
  },
  title: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "bold",
    color: "black",
    margin: 5
  },
  subTitle: {
    fontSize: 10,
    lineHeight: 23,
    color: "#515450"
  },
  back: {
    backgroundColor: "#FFFFFF",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 225
  },
  btn: {
    width: 50,
    padding: 2,
    backgroundColor: "rgb(248,26,26)",
    borderRadius: 10
  },
  btndiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  red: {
    color: "white",
    textAlign: "center",
    fontSize: 11
  }
});
