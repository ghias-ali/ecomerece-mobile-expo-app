import React from "react";
import { SafeAreaView } from "react-native";

import { WebView } from "react-native-webview";

const source = {
  uri: "https://hostnezt.com/cssfiles/csspastpapers/computer/Computer%20Science,%20Paper-2%20subjective_0.pdf",
  cache: true,
};

function BookRead() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={source} />
    </SafeAreaView>
  );
}

export default BookRead;
