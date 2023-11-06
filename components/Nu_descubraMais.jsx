import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors/Tema";

export default function Nu_descubraMais() {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,

      paddingBottom: 80,
    },
    titulo: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
    },
    titulo2: {
      fontSize: 15,
      color: color.texto,
      fontWeight: "600",
      marginTop: 10,
    },
    card: {
      marginTop: 10,
      marginRight: 20,
      backgroundColor: color.cinza2,
      width: 250,
      padding: 10,
      borderRadius: 10,
    },
    botao: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: color.roxo1,
      borderRadius: 50,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textoBotao: {
      color: color.branco,
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  const lista = [
    {
      titulo: "Seguro de vida",
      texto: "Cuide de quem você ama de um jeito simples",
      textoBotao: "Conhecer",
      imagem: require("../images/img1.jpg"),
    },
    {
      titulo: "Indique o Nu para amigos",
      texto: "Espalhe comom é simples estar no controle",
      textoBotao: "Indicar amigos",
      imagem: require("../images/img2.jpg"),
    },
    {
      titulo: "Nubank Auto",
      texto: "Aproveite seu carro com toda tranquilidade",
      textoBotao: "simule agora",
      imagem: require("../images/img3.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Descubra mais</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lista.map((item, i) => (
          <View style={styles.card} key={i}>
            <Image
              source={item.imagem}
              style={{ width: 230, height: 150, borderRadius: 10 }}
            />
            <Text style={styles.titulo2}>{item.titulo}</Text>
            <Text>{item.texto}</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>{item.textoBotao}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
