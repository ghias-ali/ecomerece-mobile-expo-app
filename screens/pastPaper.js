import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Pastpaper() {
  const [open, setOpen] = useState(false);
  const [bookopen, setbookopen] = useState(false);
  const [bookname, setbookname] = useState(null);
  const [codeopen, setcodeopen] = useState(false);
  const [codename, setcodename] = useState(null);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "O Level", value: "O Level" },
    { label: "A Level", value: "A Level" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Please Select Class:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select Class"
        zIndex={3000}
        zIndexInverse={1000}
      />

      <View style={styles.displayoftwodrops}>
        <View style={styles.flexFirstItem}>
          <Text style={styles.textHeadingforsecond}>Please Select Book</Text>
          <DropDownPicker
            open={bookopen}
            value={bookname}
            items={items}
            setOpen={setbookopen}
            setValue={setbookname}
            setItems={setItems}
            placeholder="Select Book"
            zIndex={2000}
            zIndexInverse={2000}
          />
        </View>
        <View style={styles.flexFirstItem}>
          <Text style={styles.textHeadingforsecond}>Please Select Code</Text>
          <DropDownPicker
            open={codeopen}
            value={codename}
            items={items}
            setOpen={setcodeopen}
            setValue={setcodename}
            setItems={setItems}
            placeholder="Select Code"
            zIndex={2000}
            zIndexInverse={2000}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  textHeadingforsecond: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 15,
  },

  displayoftwodrops: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexFirstItem: {
    width: "45%",
  },
});
