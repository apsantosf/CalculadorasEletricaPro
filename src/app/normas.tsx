// src/app/normas.tsx

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NormasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Base Técnica e Normas",
          headerStyle: { backgroundColor: "#8E44AD" },
          headerTintColor: "#FFF",
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Fundamentação do Kit</Text>
          <Text style={styles.subtitle}>
            Nosso compromisso é entregar cálculos precisos e seguros. Veja como
            a legislação e a ABNT são aplicadas em cada módulo do nosso
            aplicativo.
          </Text>
        </View>

        {/* Card NBR 5410 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={24}
              color="#208AEF"
            />
            <Text style={styles.cardTitle}>ABNT NBR 5410</Text>
          </View>
          <Text style={styles.cardSubtitle}>
            Instalações Elétricas de Baixa Tensão
          </Text>
          <Text style={styles.cardText}>
            É a principal norma brasileira para instalações até 1000V em
            corrente alternada. Ela garante a segurança das pessoas, animais e a
            conservação dos bens.
          </Text>
          <View style={styles.usoContainer}>
            <Text style={styles.usoTitle}>Onde utilizamos no App:</Text>
            <Text style={styles.usoText}>
              • <Text style={styles.bold}>Elétrica Residencial e Predial:</Text>{" "}
              Dimensionamento da seção mínima dos condutores (fios e cabos)
              baseada na capacidade de condução de corrente e no limite de queda
              de tensão permitido.{"\n"}• Escolha e dimensionamento dos
              disjuntores de proteção e DRs.{"\n"}• Taxa de ocupação de
              eletrodutos.
            </Text>
          </View>
        </View>

        {/* Card NBR 16690 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="solar-panel"
              size={24}
              color="#27AE60"
            />
            <Text style={styles.cardTitle}>ABNT NBR 16690</Text>
          </View>
          <Text style={styles.cardSubtitle}>
            Instalações Elétricas de Arranjos Fotovoltaicos
          </Text>
          <Text style={styles.cardText}>
            Define os requisitos de projeto para o lado de Corrente Contínua
            (CC) dos sistemas solares, protegendo contra choques elétricos,
            sobrecorrente e sobretensão.
          </Text>
          <View style={styles.usoContainer}>
            <Text style={styles.usoTitle}>Onde utilizamos no App:</Text>
            <Text style={styles.usoText}>
              • <Text style={styles.bold}>Elétrica Solar:</Text> Dimensionamento
              de proteções em Corrente Contínua (String Box).{"\n"}• Orientação
              de uso de cabos solares com proteção UV e conectores MC4
              obrigatórios.{"\n"}• Casamento perfeito de potência entre o
              arranjo dos módulos e o Inversor Solar.
            </Text>
          </View>
        </View>

        {/* Card Lei 14.300 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name="scale-balance"
              size={24}
              color="#F39C12"
            />
            <Text style={styles.cardTitle}>Lei nº 14.300/2022</Text>
          </View>
          <Text style={styles.cardSubtitle}>Marco Legal da Microgeração</Text>
          <Text style={styles.cardText}>
            A legislação que regulamenta a produção própria de energia limpa
            (On-Grid) conectada à rede das concessionárias no Brasil.
          </Text>
          <View style={styles.usoContainer}>
            <Text style={styles.usoTitle}>Onde utilizamos no App:</Text>
            <Text style={styles.usoText}>
              • <Text style={styles.bold}>Elétrica Solar (Memorial):</Text>{" "}
              Geração de alertas e orientações comerciais para o cliente,
              explicando a taxa mínima de disponibilidade (fio B) e a
              necessidade de troca para medidor bidirecional após aprovação do
              projeto.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Responsabilidade Técnica: Os resultados do aplicativo auxiliam no
            dia a dia, mas a aprovação de projetos exige a assinatura de um
            engenheiro ou técnico responsável.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  header: {
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#7F8C8D",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495E",
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7F8C8D",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
    marginBottom: 15,
  },
  usoContainer: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#8E44AD",
  },
  usoTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 6,
  },
  usoText: {
    fontSize: 13,
    color: "#4B5563",
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#2C3E50",
  },
  footer: {
    marginTop: 10,
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#FEF9E7",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F1C40F",
  },
  footerText: {
    fontSize: 12,
    color: "#B7950B",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 18,
  },
});
