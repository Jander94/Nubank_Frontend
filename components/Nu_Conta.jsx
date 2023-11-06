import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors/Tema";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome";
import Icon7 from "react-native-vector-icons/Octicons";
import ModalValor from "./ModalValor";

export default function Nu_Conta({ exibirValor }) {
  const [valor, setValor] = useState("5.000.097,56");
  const [modalVisible, setModalVisible] = useState(false);

  const listaOpcoes = [
    {
      nome: "Área Pix",
      icone: <Icon3 name="attach-money" size={24} />,
    },
    {
      nome: "Pagar",
      icone: <Icon4 name="barcode" size={24} />,
    },
    {
      nome: "Pegar emprestado",
      icone: <Icon5 name="coins" size={24} />,
    },
    {
      nome: "Tranferir",
      icone: <Icon6 name="money" size={24} />,
    },
    {
      nome: "Recarga de celular",
      icone: <Icon4 name="cellphone-check" size={24} />,
    },
    {
      nome: "Investir",
      icone: <Icon1 name="barschart" size={24} />,
    },
  ];

  const Opcoes = (lista) => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {lista.lista.map((item, i) => (
            <View key={i} style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.circulo}>
                {item.icone}
              </TouchableOpacity>
              <Text style={{ marginTop: 10 }}>{item.nome}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const CardInfo = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            Prêmios mensais com Nubank Vida a partir de R$4/mês
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            Concorra a prêmios todos os dias na
            <Text style={styles.textoRoxo}> Promoção N Chances de Ganhar</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infos}>
          <Text style={styles.textoInfo}>
            <Text style={styles.textoRoxo}>Convide amigos para o Nubank </Text>e
            desbloqueie brasões incríveis.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: color.cinza3,
      paddingBottom: 20,
    },
    conta: {
      fontSize: 18,
      color: color.texto,
      fontWeight: "600",
    },
    saldo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    saldoClosed: {
      flexDirection: "row",
      marginTop: 10,
    },
    circulo: {
      backgroundColor: color.cinza2,
      marginRight: 10,
      height: 70,
      width: 70,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    cartoes: {
      flexDirection: "row",
      backgroundColor: color.cinza2,
      height: 50,
      borderRadius: 7,
      alignItems: "center",
      marginTop: 20,
      paddingLeft: 10,
    },
    texto: {
      marginLeft: 10,
      fontWeight: "600",
    },
    infos: {
      backgroundColor: color.cinza2,
      padding: 20,
      width: 300,
      borderRadius: 10,
      marginRight: 20,
    },
    textoRoxo: {
      color: color.roxo1,
    },
    textoInfo: {
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <ModalValor
        visible={modalVisible}
        setVisible={setModalVisible}
        valor={valor}
        setValor={setValor}
      />

      <TouchableOpacity
        onLongPress={() => setModalVisible(true)}
        style={styles.saldo}
      >
        <View>
          <Text style={styles.conta}>Conta</Text>
          {exibirValor ? (
            <Text style={styles.conta}>R$ {valor}</Text>
          ) : (
            <View style={styles.saldoClosed}>
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
              <Icon2 name="controller-record" />
            </View>
          )}
        </View>
        <View>
          <Icon1 name="right" size={18} color={color.texto} />
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <Opcoes lista={listaOpcoes} />
      </View>

      <TouchableOpacity style={styles.cartoes}>
        <Icon7 name="credit-card" size={22} />
        <Text style={styles.texto}>Meus cartões</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <CardInfo />
      </View>
    </View>
  );
}
