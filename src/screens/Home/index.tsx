import { Text, View } from "react-native";
import { styles } from "./styles";
export function Home() {
  /**
   * Função inicial do nosso aplicativo
   * Interface é componente: elemento visual
   *
   * Densidade de Pixels:
   *
   *  */
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>React Native</Text>
      <Text style={styles.eventDate}>11/08/1994</Text>
    </View>
  );
}
