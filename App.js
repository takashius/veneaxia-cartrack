import "react-native-gesture-handler";
import React, { useState, useEffect, Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { func } from "./src/constants";
import { PaperProvider } from "react-native-paper";

// root stack navigatio
import RootStack from "./src/navigation/RootStack";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    // when loading is complete
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();

      // hide splash screen to show app
      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Fragment>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <RootStack />
      </PaperProvider>
    </Fragment>
  );
}
