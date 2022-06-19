import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { useSelector } from "react-redux";
import { subscription } from "../config/axios";

export default function Subscription() {
  const [visible, setVisible] = useState(false);
  const [price, setprice] = useState("");
  const user = useSelector((state) => state.authReducer.user);

  const showModal = (l) => {
    if (l !== "Free Pass") {
      setprice(l);
      setVisible(true);
    }
  };
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const proceedSubscription = () => {
    let data = {
      plan: "Month",
      name: user?.name,
      email: user?.email,
      refference: "112211",
    };
    subscription({
      method: "POST",

      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        alert("Please try again later");
        console.log(err);
      });
  };

  const mydata = [
    {
      id: 1,
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/23/77/book-icon-logo-vector-2982377.jpg",

      title: "Three Day Pass",
      description: "Free Pass",
      read: "Free Book Reading",
    },
    {
      id: 2,
      title: "Three Month Pass",
      description: "20 $",
      read: "Free Book Reading",
    },
    {
      id: 3,
      title: "Yearly Pass",
      description: "75 $",
      read: "Free Book Reading",
    },
  ];

  const renderData = (item) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: "https://cdn3.vectorstock.com/i/1000x1000/23/77/book-icon-logo-vector-2982377.jpg",
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.description}</Text>
        <Text style={styles.read}>{item.read}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => showModal(item?.description)}
        >
          <Text style={{ color: "white" }}>Buy plan</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.get}>GET PLAN</Text>
        <Text style={styles.plan}>Choose a Plan</Text>
        <FlatList
          data={mydata}
          renderItem={({ item }) => {
            return renderData(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
            style={{ padding: 10, borderRadius: 0 }}
          >
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
                marginBottom: 12,
              }}
            >
              Please Enter Order Details!
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              You wants Month subscription from kitabank
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              So please Pay {price} from jazzcash first.
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Send us money through JazzCash, detail below pasted
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Name: Malik Nouman
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Account#: 03244361494
            </Text>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Name: </Text>

              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value={user?.name}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Email: </Text>

              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value={user?.email}
                editable={false}
                selectTextOnFocus={false}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold" }}>
                Enter Refference or Transit Number*{" "}
              </Text>

              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  borderColor: "#777777",
                  marginTop: 5,
                }}
                value=""
                placeholder=""
              />
            </View>
            <View
              style={{
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "rgb(248,26,26)",
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={proceedSubscription}
              >
                <Text style={{ color: "white" }}>Proceed Subscription</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    alignSelf: "center",
    marginBottom: 100,
  },
  card: {
    padding: 50,
    margin: 10,
    backgroundColor: "#1d95d2",
    borderRadius: 20,
  },

  title: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    lineHeight: 23,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  read: {
    fontSize: 12,
    lineHeight: 23,
    color: "white",
    textAlign: "center",
  },
  get: {
    fontSize: 15,
    color: "rgba(68,16,102,1)",
    textAlign: "center",
  },
  plan: {
    fontSize: 25,
    color: "#1e1f36",
    textAlign: "center",
  },
  btn: {
    padding: 6,
    backgroundColor: "#40cbb4",
    borderRadius: 5,
    marginTop: 15,
    alignSelf: "center",
    color: "white",
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 15,
  },
});
