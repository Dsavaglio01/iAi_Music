import BottomSheet from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, { useCallback, useMemo, useRef } from "react";
import { Text, View } from "react-native";

export default function TabsLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "90%"], []);

  const openPlayer = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="search" options={{ title: "Search" }} />
        <Tabs.Screen name="library" options={{ title: "Library" }} />
        <Tabs.Screen name="upload" options={{ title: "Upload" }} />
      </Tabs> */}

      {/* Persistent mini player ABOVE the tabs */}
      {/* <MiniPlayer onPress={openPlayer} /> */}

      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={0} // FORCE OPEN
          snapPoints={[120, "90%"]} // use a px snap first to avoid 0-height bugs
          enablePanDownToClose
          backgroundStyle={{ backgroundColor: "red" }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
        >
          <View style={{ height: 300 }}>
            <Text>Bruh</Text>
          </View>
        </BottomSheet>

      </Portal>
      
    </View>
  );
}
