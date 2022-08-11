import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
export function Home() {
  /**
   * Função inicial do nosso aplicativo
   * Interface é componente: elemento visual
   * Densidade de Pixels:
   *
   *  */

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome do Evento</Text>
      <Text style={styles.eventDate}>11/08/1994</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
