import { Text, View, TextInput } from "react-native";
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
      <Text style={styles.titulo}>Nome do Evento</Text>
      <Text style={styles.eventDate}>11/08/1994</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do participante"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
}
