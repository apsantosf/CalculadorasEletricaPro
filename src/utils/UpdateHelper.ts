// utils/UpdateHelper.ts
import { Alert, Platform } from "react-native";
import SpInAppUpdates, { IAUUpdateKind } from "sp-react-native-in-app-updates";

export function checarAtualizacao() {
  if (Platform.OS !== "android") return;

  const inAppUpdates = new SpInAppUpdates(false); // false = modo produção na Play Store

  inAppUpdates
    .checkNeedsUpdate()
    .then((result: any) => {
      if (result.shouldUpdate) {
        // 💡 A MÁGICA AQUI: O Alerta trava a tela e obriga o clique no botão
        Alert.alert(
          "Atualização Obrigatória ⚡",
          "Uma nova versão crítica do Kit Elétrica Pro está disponível. Precisamos atualizar para garantir a precisão e o funcionamento correto de todos os cálculos (Residencial, Predial e Solar).",
          [
            {
              text: "Atualizar Agora",
              onPress: () => {
                // Ao clicar, aciona o bloqueio nativo em tela cheia do Google Play
                inAppUpdates.startUpdate({
                  updateType: IAUUpdateKind.IMMEDIATE,
                });
              },
            },
          ],
          { cancelable: false }, // Impede que o usuário fuja clicando fora da caixa
        );
      }
    })
    .catch((error: any) => {
      console.log("Erro ao verificar atualização no Google Play:", error);
    });
}
