// src/app/_layout.tsx

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react"; // 💡 NOVO: Importamos o gatilho
import { Platform, StyleSheet, View } from "react-native";
import { checarAtualizacao } from "../utils/UpdateHelper"; // 💡 NOVO: Importamos a função

export default function RootLayout() {
  // 💡 NOVO: O gatilho que verifica a atualização assim que o app abre
  useEffect(() => {
    checarAtualizacao();
  }, []);

  return (
    <View style={styles.wrapperWeb}>
      <Stack>
        {/* Tela do Menu Principal */}
        <Stack.Screen
          name="index"
          options={{
            title: "Kit Elétrica Pro",
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
