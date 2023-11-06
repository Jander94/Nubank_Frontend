import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";

export default function MenuFixo() {
  const [selecionado, setSelecionado] = useState(1);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      position: "absolute",
      left: 100,
      bottom: 0,
    },
    menu: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: color.branco,
      width: 200,
      height: 60,
      borderRadius: 50,
      marginBottom: 10,
    },
    selects: {
      height: "90%",
      width: "30%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 1 ? color.roxo4 : null,
          }}
        >
          <Icon1
            name="arrow-switch"
            size={25}
            style={{ transform: [{ rotate: "90deg" }] }}
            color={selecionado === 1 ? color.roxo1 : color.iconecinza}
            onPress={() => setSelecionado(1)}
          />
        </View>

        <View
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 2 ? color.roxo4 : null,
          }}
        >
          <Icon2
            name="attach-money"
            size={25}
            color={selecionado === 2 ? color.roxo1 : color.iconecinza}
            onPress={() => setSelecionado(2)}
          />
        </View>

        <View
          style={{
            ...styles.selects,
            backgroundColor: selecionado === 3 ? color.roxo4 : null,
          }}
        >
          <Icon3
            name="handbag"
            size={25}
            color={selecionado === 3 ? color.roxo1 : color.iconecinza}
            onPress={() => setSelecionado(3)}
          />
        </View>
      </View>
    </View>
  );
}
