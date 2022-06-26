import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";

import { WebView } from "react-native-webview";
const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

function BookRead({ route }) {
  const window = useWindowDimensions();
  const [loading, setloading] = useState(true);

  const hideSpinner = () => {
    setloading(false);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 2,
          height: 30,
          width: "100%",
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16,
          }}
        >
          KITABANK READING MODULE
        </Text>
      </View>
      <WebView
        onLoad={() => hideSpinner()}
        source={{
          uri: `http://docs.google.com/gview?embedded=true&url=${route.params.link}`,
          cache: true,
        }}
        injectedJavaScript={INJECTEDJAVASCRIPT}
      />
      {loading && (
        <ActivityIndicator
          style={{
            position: "absolute",
            top: window.height / 2,
            left: window.width / 2,
          }}
          size="large"
        />
      )}
    </SafeAreaView>
  );
}

export default BookRead;
