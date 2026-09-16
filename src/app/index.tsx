// src/app/index.tsx

import Constants from "expo-constants"; // 💡 Importação para ler o app.json
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  BackHandler,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MenuPrincipal() {
  const router = useRouter();
  const [modalSair, setModalSair] = useState(false);

  // 💡 Puxa a versão automaticamente do app.json
  const appVersion = Constants.expoConfig?.version || "1.0.3";

  const handleSairApp = () => {
    setModalSair(false);
    if (Platform.OS === "android") {
      BackHandler.exitApp();
    } else if (Platform.OS === "web" && typeof window !== "undefined") {
      window.alert(
        "Sessão encerrada com segurança! Você já pode fechar esta aba.",
      );
      window.location.replace("about:blank");
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          // 💡 TÍTULO DINÂMICO com a versão
          title: `⚡ 🏢 ☀️ Kit Elétrica Pro v${appVersion}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setModalSair(true)}
              style={styles.botaoSairHeader}
            >
              <Text style={styles.textoBotaoSairHeader}>X</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.rowIcones}>
            <View style={styles.iconWrapper}>
              <Text style={styles.emojiPrincipal}>⚡</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Text style={styles.emojiPrincipal}>🏢</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Text style={styles.emojiPrincipal}>☀️</Text>
            </View>
          </View>

          <Text style={styles.title}>Bem-vindo ao Kit Elétrica Pro</Text>
          <Text style={styles.subtitle}>
            Selecione o módulo desejado para iniciar seus dimensionamentos e
            consultas.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/residencial")}
        >
          <Text style={styles.cardTitle}>⚡ Elétrica Residencial</Text>
          <Text style={styles.cardDesc}>
            Cálculos e dimensionamentos focados em instalações de baixa tensão
            do dia a dia.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: "#F39C12" }]}
          onPress={() => router.push("/predial")}
        >
          <Text style={styles.cardTitle}>🏢 Elétrica Predial</Text>
          <Text style={styles.cardDesc}>
            Gestão de cargas, prumadas e dimensionamentos maiores para
            edifícios.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: "#27AE60" }]}
          onPress={() => router.push("/solar")}
        >
          <Text style={styles.cardTitle}>☀️ Elétrica Solar</Text>
          <Text style={styles.cardDesc}>
            Ferramentas completas para projetos e sistemas fotovoltaicos.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: "#8E44AD" }]}
          onPress={() => router.push("/normas")}
        >
          <Text style={styles.cardTitle}>📚 Normas Técnicas</Text>
          <Text style={styles.cardDesc}>
            Entenda como a NBR 5410, NBR 16690 e a Lei 14.300 fundamentam nossos
            cálculos.
          </Text>
        </TouchableOpacity>

        <View style={styles.normasContainer}>
          <Text style={styles.normasTitle}>Base Técnica e Segurança</Text>
          <Text style={styles.normasDesc}>
            Cálculos desenvolvidos com rigor técnico, fundamentados nas
            diretrizes da NBR 5410 e ABNT NBR 16690.
          </Text>
        </View>
      </ScrollView>

      <Modal visible={modalSair} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sair do Aplicativo</Text>
            <Text style={styles.modalText}>
              Deseja realmente encerrar o Kit Elétrica Pro?
            </Text>

            <TouchableOpacity
              style={styles.btnEncerrar}
              onPress={handleSairApp}
              activeOpacity={0.8}
            >
              <Text style={styles.btnEncerrarText}>Encerrar Aplicativo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCancelar}
              onPress={() => setModalSair(false)}
              activeOpacity={0.8}
            >
              <Text style={styles.btnCancelarText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  headerContainer: {
    marginBottom: 30,
    marginTop: 10,
  },
  rowIcones: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 15,
  },
  iconWrapper: {
    backgroundColor: "#FFFFFF",
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  emojiPrincipal: {
    fontSize: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#7F8C8D",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#208AEF",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495E",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: "#7F8C8D",
    lineHeight: 20,
  },
  normasContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#EAECEE",
    borderRadius: 8,
    alignItems: "center",
  },
  normasTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7F8C8D",
    marginBottom: 4,
  },
  normasDesc: {
    fontSize: 12,
    color: "#95A5A6",
    textAlign: "center",
    lineHeight: 18,
  },
  botaoSairHeader: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textoBotaoSairHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    ...Platform.select({
      web: { boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" as any },
      default: { elevation: 10 },
    }),
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  modalText: {
    fontSize: 15,
    color: "#4b5563",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  btnEncerrar: {
    backgroundColor: "#ef4444",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  btnEncerrarText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnCancelar: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  btnCancelarText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "bold",
  },
});
