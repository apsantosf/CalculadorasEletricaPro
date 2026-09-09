//   src/app/index.tsx

import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MenuPrincipal() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo ao Kit Elétrica Pro</Text>
        <Text style={styles.subtitle}>
          Selecione o módulo desejado para iniciar seus dimensionamentos e
          consultas.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        // 💡 Caminho corrigido para navegação absoluta
        onPress={() => router.push("/residencial")}
      >
        <Text style={styles.cardTitle}>⚡ Elétrica Residencial</Text>
        <Text style={styles.cardDesc}>
          Cálculos e dimensionamentos focados em instalações de baixa tensão do
          dia a dia.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: "#F39C12" }]}
        // 💡 Caminho corrigido para navegação absoluta
        onPress={() => router.push("/predial")}
      >
        <Text style={styles.cardTitle}>🏢 Elétrica Predial</Text>
        <Text style={styles.cardDesc}>
          Gestão de cargas, prumadas e dimensionamentos maiores para edifícios.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, { borderLeftColor: "#27AE60" }]}
        // 💡 Caminho corrigido para navegação absoluta
        onPress={() => router.push("/solar")}
      >
        <Text style={styles.cardTitle}>☀️ Elétrica Solar</Text>
        <Text style={styles.cardDesc}>
          Ferramentas completas para projetos e sistemas fotovoltaicos.
        </Text>
      </TouchableOpacity>

      <View style={styles.normasContainer}>
        <Text style={styles.normasTitle}>Base Técnica</Text>
        <Text style={styles.normasDesc}>
          Cálculos desenvolvidos com base nas diretrizes da NBR 5410 e ABNT NBR
          16690.
        </Text>
      </View>
    </ScrollView>
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
    marginTop: 30,
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
  },
});
