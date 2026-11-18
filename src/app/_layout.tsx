// src/app/_layout.tsx

import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { checarAtualizacao } from "../utils/UpdateHelper";

export default function RootLayout() {
  useEffect(() => {
    // 💡 Verifica atualização assim que o app abre
    checarAtualizacao();

    // 🚀 Trava o app em modo retrato (Portrait Up) em dispositivos móveis
    if (Platform.OS !== "web") {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP,
      ).catch(() => {});
    }
  }, []);

  return (
    <View style={styles.wrapperWeb}>
      <Stack>
        {/* Tela do Menu Principal */}
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#208AEF" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />

        {/* Registro dos Módulos */}
        <Stack.Screen name="residencial" options={{ headerShown: false }} />
        <Stack.Screen name="predial" options={{ headerShown: false }} />
        <Stack.Screen name="solar" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperWeb: {
    flex: 1,
    backgroundColor: "#000",
    ...(Platform.OS === "web"
      ? {
          maxWidth: 450,
          width: "100%",
          alignSelf: "center",
          height: "100vh" as any,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.5)" as any,
        }
      : {
          width: "100%",
        }),
  },
});
