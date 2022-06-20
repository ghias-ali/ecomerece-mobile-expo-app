import React from "react";
import { SafeAreaView, View } from "react-native";

import { WebView } from "react-native-webview";

const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

function BookRead() {
  const source = {
    uri: "https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.africau.edu/images/default/sample.pdf",
    cache: true,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#ffff",
          height: 30,
          width: 30,
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      ></View>
      <WebView
        source={source}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        scrollEnabled
      />
    </SafeAreaView>
  );
}

export default BookRead;
