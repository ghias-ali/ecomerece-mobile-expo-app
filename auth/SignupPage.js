import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { register } from "../config/axios";
import { useDispatch } from "react-redux";
import { setUserData, setLoginState } from "../redux/actions";

function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
        })
        .catch(() => {
          alert("Error Occured! Try again later");
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
          placeholder="Name"
          placeholderTextColor="#003f5c"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setNameError("");
          }}
        />
      </View>
      {!!nameError && <Text style={styles.errorIndicator}>{nameError}</Text>}

      <View style={styles.inputView}>
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
      {!!phoneError && <Text style={styles.errorIndicator}>{phoneError}</Text>}
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
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.displayflex}>
        <Text>Already Have Account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.siggnuptext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
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
