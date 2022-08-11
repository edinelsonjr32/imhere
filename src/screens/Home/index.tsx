import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

import Participant from "../../components/Participant";

export function Home() {
  /**
   * Função inicial do nosso aplicativo
   * Interface é componente: elemento visual
   * Densidade de Pixels:
   *
   *  */

  const participants = [
    "Edinelson",
    "João",
    "Maria",
    "Joana",
    "Carlos",
    "Stephanie",
    "Clívia",
    "Carla",
    "Luiz",
  ];
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou para remover o participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula de Programação Móvel</Text>
      <Text style={styles.eventDate}>Quinta, 11 de Agosto de 2022</Text>

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            nome={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
