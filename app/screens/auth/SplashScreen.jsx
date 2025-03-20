import React, { useEffect, useRef } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animación de opacidad

  useEffect(() => {
    // Animación de Fade In para imagen y textos
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1.5 segundos de fade in
      useNativeDriver: true,
    }).start();

    // Redirigir a HomeScreen después de 5 segundos
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Imagen animada */}
      <Animated.Image
        source={require("../../assets/Images/splash-image.png")}
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"
      />

      {/* Texto animado */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Bienvenidos a CultivaMarket</Text>
        <Text style={styles.subtitle}>La mejor forma de comprar y vender, sin intermediarios</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Color de fondo para mejor visualización
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 23,
    color: "#A0FFA0",
    marginTop: 30,

    textAlign: "center",
  },
});
