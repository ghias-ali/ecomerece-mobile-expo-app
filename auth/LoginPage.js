import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../config/axios";
import { setUserData } from "../redux/actions";

function Login({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (!checkValidation()) {
      const user = { email, password };

      login({
        method: "post",
        data: user,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          dispatch(setUserData(res.data.user));

          navigation.navigate("Home1");
        })
        .catch(() => {
          alert("Email or Password is incorrect!");
        });
    } else {
      alert("Error");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "http://www.kitabank.com/uploads/cms/logo.png",
        }}
      />
      <View style={styles.inputView}>
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
      {!!emailError && <Text style={styles.errorIndicator}>{emailError}</Text>}
      <View style={styles.inputView}>
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
      <TouchableOpacity style={styles.loginBtn} onPress={() => onSubmit()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.displayflex}>
        <Text>Don't Have Account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={styles.siggnuptext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
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
