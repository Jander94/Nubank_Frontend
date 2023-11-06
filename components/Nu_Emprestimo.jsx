import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/AntDesign";
import ModalValor from "./ModalValor";

export default function Nu_Emprestimo() {
  const [valorEmprestimo, setValorEmprestimo] = useState("5.000,00");
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,
    },
    emprestimo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titulo: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
    },
  });

  return (
    <View style={styles.container}>
      <ModalValor
        visible={modalVisible}
        setVisible={setModalVisible}
        valor={valorEmprestimo}
        setValor={setValorEmprestimo}
      />
      <TouchableOpacity style={styles.emprestimo}>
        <View>
          <Text style={styles.titulo}>Empréstimo</Text>
        </View>
        <View>
          <Icon1 name="right" size={18} color={color.texto} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onLongPress={() => setModalVisible(true)}
        style={{ marginTop: 10 }}
      >
        <Text style={{ marginVertical: 4 }}>Valor disponivel de até</Text>
        <Text>R$ {valorEmprestimo}</Text>
      </TouchableOpacity>
    </View>
  );
}
