import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    Promise.resolve(setTimeout(() => SplashScreen.hideAsync(), 3000));
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#000",
        }}
      >
        <WebView
          source={{ uri: "https://app.harambedex.io/#/trade" }}
          useWebView2={true}
          cacheEnabled={true}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          onLoad={() => SplashScreen.hideAsync()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
