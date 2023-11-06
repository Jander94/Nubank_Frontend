import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors/Tema";

export default function ModalValor({ visible, setVisible, valor, setValor }) {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: color.cinza3,
    },
    modalView: {
      margin: 20,
      backgroundColor: color.branco,
      borderRadius: 10,
      padding: 35,
      width: 300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      backgroundColor: color.cinza1,
      width: "100%",
      marginTop: 15,
      height: 40,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: color.cinza3,
      padding: 10,
    },
    salvar: {
      backgroundColor: color.roxo1,
      paddingHorizontal: 25,
      paddingVertical: 10,
      marginTop: 15,
      borderRadius: 7,
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 16 }}>Novo valor:</Text>
          <TextInput style={styles.input} onChangeText={setValor} />
          <TouchableOpacity
            style={styles.salvar}
            onPress={() => setVisible(false)}
          >
            <Text style={{ color: color.branco }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
