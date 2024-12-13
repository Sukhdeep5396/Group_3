import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <Text> Sukhdeep Singh </Text>
      <Text style={styles.long}>Minh Long Vu</Text>

      <Text style={styles.heading}> Sukhdeep Singh </Text>
      <Text>Minh Long Vu</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f7f7f7', // light background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3e3e3e',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5,
    textShadowColor: '#888',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    borderBottomWidth: 2,        
    paddingBottom: 10, 
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
