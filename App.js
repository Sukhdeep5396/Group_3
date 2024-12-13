import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Sukhdeep Singh </Text>
      <Text style={styles.long}>Minh Long Vu</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  long: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#6f83a3",
    padding: 10,
    marginTop: 20,
    width: "100%",
    color: "white",
    textAlign: "center",
  },
});
