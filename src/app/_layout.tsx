//   src/app/_layout.tsx

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";

export default function RootLayout() {
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

        {/* Registro dos Módulos (escondemos o header global para que o header do seu próprio app apareça) */}
        <Stack.Screen name="residencial" options={{ headerShown: false }} />
        <Stack.Screen name="predial" options={{ headerShown: false }} />
        <Stack.Screen name="solar" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}

// 💡 Estilo adicionado para manter o formato de celular na Web em todo o app
const styles = StyleSheet.create({
  wrapperWeb: {
    flex: 1,
    backgroundColor: "#000", // Fundo escuro fora do "celular" na web
    ...(Platform.OS === "web"
      ? {
          maxWidth: 450,
          width: "100%",
          alignSelf: "center",
          height: "100vh" as any,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.5)" as any, // Sombra para destacar
        }
      : {
          width: "100%",
        }),
  },
});
