import { ScrollView, StyleSheet, View } from "react-native";
import Nu_Header from "./components/Nu_Header";
import Nu_Conta from "./components/Nu_Conta";
import { useState } from "react";
import Nu_Credito from "./components/Nu_Credito";
import Nu_Emprestimo from "./components/Nu_Emprestimo";
import Nu_descubraMais from "./components/Nu_descubraMais";
import MenuFixo from "./components/MenuFixo";
import { color } from "./colors/Tema";

export default function Nubank() {
  const [exibirValor, setExibirValor] = useState(true);

  return (
    <View style={{ height: "100%", backgroundColor: color.cinza1 }}>
      <ScrollView>
        <Nu_Header exibirValor={exibirValor} setExibirValor={setExibirValor} />
        <Nu_Conta exibirValor={exibirValor} />
        <Nu_Credito />
        <Nu_Emprestimo />
        <Nu_descubraMais />
      </ScrollView>
      <MenuFixo />
    </View>
  );
}
