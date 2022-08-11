import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Participant from "../../components/Participant";

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
  function handleParticipantRemove(name: string){
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
      <Participant nome="João" onRemove={()=> handleParticipantRemove("João")}/>

        
    </View>
  );
}
