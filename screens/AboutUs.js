import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function AboutUs({}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image155}
          source={require("./Images/about1.jpg")}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.about}>About Us</Text>
      </TouchableOpacity>
      <Text style={styles.about1}>Why choose us</Text>
      <Text style={styles.about2}>
        Wskills are a construction Industry supplier delivering National
        Vocational Qualifications (NVQs) and training to meet health and safety
        compliance.
      </Text>
      <Text style={styles.about2}>
        Wskills was established 5 years ago and proudly offers more than 40
        years combined experience in the construction and building industries.
        We work with companies to upskill workers and provide comprehensive
        advice and guidance to ensure you receive high-quality construction
        courses to boost your career prospects. Although we are based in Leyton,
        our NVQ training courses are conducted through onsite visits, so there’s
        no need to sit in a classroom and it can be completed throughout the UK.
      </Text>
      <Text style={styles.about2}>
        What sets us apart from our competitors is the mix of our highly
        experienced team, our innovative solutions and our bespoke tailor made
        products.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  image155: {
    width: 350,
    borderRadius: 10,
    alignSelf: "center",
  },
  about: {
    fontSize: 25,
    marginTop: 5,
    textAlign: "center",
    color: "#303030",
  },
  about1: {
    fontSize: 18,
    marginTop: 5,
    color: "#F8BF2D",
    textDecorationLine: "underline",
    padding: 3,
  },
  about2: {
    fontSize: 15,
    color: "black",
    marginTop: 5,
    color: "#5D524F",
    fontWeight: "normal",
    paddingLeft: 3,
    paddingRight: 3,
  },
});
