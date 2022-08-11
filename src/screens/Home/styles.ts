import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 30,
    },
    titulo: {
      fontSize: 23,
      color: "#fff",
    },
    eventDate: {
      fontStyle: "italic",
      fontSize: 15,
      color: '#f1f2f3'
    },
    input:{
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12,
    },
    buttonText:{
        color: '#fff',
        fontSize: 24
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formulario:{
        width:'100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }
  });
  