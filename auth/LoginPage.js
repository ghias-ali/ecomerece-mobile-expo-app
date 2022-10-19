import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../config/axios";
import { setUserData, setLoginState } from "../redux/actions";
import { useHeaderHeight } from "@react-navigation/elements";

const screen = Dimensions.get("screen");

function Login({ navigation }) {
  const dispatch = useDispatch();
  const height = useHeaderHeight();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
    return error;
  };
  const onSubmit = () => {
    setloading(true);
    if (!checkValidation()) {
      const user = { email, password };

      login({
        method: "post",
        data: user,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          setEmail("");
          setPassword("");
          dispatch(setUserData(res.data.user));
          dispatch(setLoginState(true));
          setloading(false);
        })
        .catch(() => {
          alert("Email or Password is incorrect!");
          setloading(false);
        });
    } else {
      alert("Error");
      setloading(false);
    }
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions(screen);
      }
    );
    return () => subscription?.remove();
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container2}
      keyboardVerticalOffset={height + 47}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://kitabank.studentsresource.net/uploads/cms/logo.png",
            }}
          />
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
              <Text style={styles.loginText}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <View style={styles.displayflex}>
            <Text>Don't Have Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
              <Text style={styles.siggnuptext}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default Login;
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
    margin: 0,
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
