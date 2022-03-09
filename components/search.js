import * as React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { Modal, Portal, Provider } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchCustom() {
  const [visible, setVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };
  return (
    <View>
      <View
        style={{
          marginTop: 5,
          padding: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            width: "80%",
            // borderWidth: 0.3,
            padding: 5,
            backgroundColor: "white",
            height: 45,
            borderRadius: 3,
          }}
          placeholder="Search"
          placeholderTextColor="#003f5c"
          secureTextEntry
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "white", padding: 13, borderRadius: 2 }}
          onPress={showModal}
        >
          <AntDesign
            style={{
              color: "rgb(255,79,129)",
              fontSize: 20,
            }}
            name="filter"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchCustom;
