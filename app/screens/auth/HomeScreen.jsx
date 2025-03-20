import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require("../../assets/Images/home-background.png")} 
      style={styles.container}
    >
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 12,
    borderRadius: 8,
    marginTop: 450,
  },
  buttonText: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
