import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Fontisto";

export default function Nu_Header({ exibirValor, setExibirValor }) {
  const [user, setUser] = useState("Jander");
  const styles = StyleSheet.create({
    container: {
      height: 200,
      backgroundColor: color.roxo1,
      justifyContent: "space-evenly",
    },
    info: {
      backgroundColor: color.branco,
      height: 50,
      marginHorizontal: 20,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    texto: {
      color: color.roxo1,
    },
    menuTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    circle: {
      height: 45,
      width: 45,
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 50,
      backgroundColor: color.cinza1,
      alignItems: "center",
      justifyContent: "center",
    },
    subMenuLeft: {
      flexDirection: "row",
      width: "50%",
    },
    subMenuRight: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "50%",
      height: 45,
    },
    icones: { marginHorizontal: 10 },
    nome: {
      marginLeft: 20,
      color: color.branco,
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menuTop}>
        <View style={styles.subMenuLeft}>
          <View style={styles.circle}>
            <Icon1 name="person-add-outline" color={color.branco} size={18} />
          </View>
          {/* <View style={styles.circle}></View> */}
        </View>

        <View style={styles.subMenuRight}>
          <Icon2
            name={exibirValor ? "eye" : "eye-closed"}
            color={color.branco}
            size={20}
            style={styles.icones}
            onPress={() => setExibirValor(!exibirValor)}
          />
          <Icon3
            name="questioncircleo"
            color={color.branco}
            size={20}
            style={styles.icones}
          />
          <Icon4
            name="email"
            color={color.branco}
            size={20}
            style={styles.icones}
          />
        </View>
      </View>
      <Text style={styles.nome}>Olá, {user}</Text>
      <TouchableOpacity style={styles.info}>
        <Text style={styles.texto}>
          A fatura fechou. Pague já e libere seu limite
        </Text>
      </TouchableOpacity>
    </View>
  );
}
