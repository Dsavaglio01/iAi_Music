import { PlayerProvider } from "@/constants/PlayerProvider";
import { PortalProvider } from '@gorhom/portal';
import { Stack } from "expo-router";
import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <PlayerProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PlayerProvider>
       </PortalProvider>
    </GestureHandlerRootView>
  );
}
