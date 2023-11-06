import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Nubank from "./Nubank";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Nubank />
    </View>
  );
}
