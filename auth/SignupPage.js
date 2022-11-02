import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import { register } from "../config/axios";
import { useDispatch } from "react-redux";
import { setUserData, setLoginState } from "../redux/actions";
const screen = Dimensions.get("screen");

function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const height = useHeaderHeight();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setloading] = useState(false);
  const [dimensions, setDimensions] = useState(screen);
  const checkValidation = () => {
    let error = false;
    if (email === "") {
      setEmailError("This field is required");
      error = true;
    }
    if (password === "") {
      setPasswordError("This field is required");
      error = true;
    }
    if (name === "") {
      setNameError("This field is required");
      error = true;
    }
    if (phone === "") {
      setPhoneError("This field is required");
      error = true;
    }
    return error;
  };
  const onSubmit = () => {
    setloading(true);

    if (!checkValidation()) {
      const user = {
        email: email,
        password: password,
        c_password: password,
        name: name,
      };
      register({
        method: "post",
        data: user,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          dispatch(setUserData(res.data.user));
          dispatch(setLoginState(true));
          setloading(false);
        })
        .catch(() => {
          alert("Error Occured! Try again later");
          setloading(false);
        });
    } else {
      alert("Error");
      setloading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container2}
      keyboardVerticalOffset={height + 47}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <Image
            style={styles.logo}
            source={{
              uri: "https://kitabank.studentsresource.net/uploads/cms/logo.png",
            }}
          /> */}
          <Text
            style={{
              textAlign: "center",
              marginBottom: 15,
              fontSize: 30,
              fontWeight: "900",
            }}
          >
            User Registration
          </Text>

          <View
            style={{
              backgroundColor: "#ced4da",
              borderRadius: 25,
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              padding: 20,
              width: dimensions.width - 40,
            }}
          >
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setNameError("");
              }}
            />
          </View>
          {!!nameError && (
            <Text style={styles.errorIndicator}>{nameError}</Text>
          )}

          <View
            style={{
              backgroundColor: "#ced4da",
              borderRadius: 25,
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              padding: 20,
              width: dimensions.width - 40,
            }}
          >
            <TextInput
              style={styles.inputText}
              placeholder="Phone"
              placeholderTextColor="#003f5c"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setPhoneError("");
              }}
            />
          </View>
          {!!phoneError && (
            <Text style={styles.errorIndicator}>{phoneError}</Text>
          )}
          <View
            style={{
              backgroundColor: "#ced4da",
              borderRadius: 25,
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              padding: 20,
              width: dimensions.width - 40,
            }}
          >
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError("");
              }}
            />
          </View>
          {!!emailError && (
            <Text style={styles.errorIndicator}>{emailError}</Text>
          )}
          <View
            style={{
              backgroundColor: "#ced4da",
              borderRadius: 25,
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              padding: 20,
              width: dimensions.width - 40,
            }}
          >
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
            />
          </View>
          {!!passwordError && (
            <Text style={styles.errorIndicator}>{passwordError}</Text>
          )}
          <TouchableOpacity
            style={{
              width: dimensions.width - 200,
              backgroundColor: "#f81a1a",
              borderRadius: 25,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 10,
            }}
            onPress={() => onSubmit()}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.loginText}>Register</Text>
            )}
          </TouchableOpacity>
          <View style={styles.displayflex}>
            <Text>Already Have Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.siggnuptext}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    height: 200,
    width: 200,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ced4da",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "50%",
    backgroundColor: "#f81a1a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  errorIndicator: {
    marginTop: -12,
    color: "#ff0000",
  },
  loginText: {
    color: "white",
  },
  displayflex: {
    display: "flex",
    flexDirection: "row",
  },
  siggnuptext: {
    color: "blue",
  },
});
