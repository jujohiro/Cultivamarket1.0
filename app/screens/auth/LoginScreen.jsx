import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Image 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ImageBackground 
      source={require("../../assets/Images/login-background.png")} 
      style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      {/* Logo */}
      <Image 
        source={require("../../assets/Images/logo.png")}  
        style={{ width: 350, height: 150, marginBottom: 350, }}
        resizeMode="contain"
      />


      {/* Input Email */}
      <TextInput
        placeholder="Ingresa tu correo electrónico"
        placeholderTextColor="#ddd"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          width: 280,
          padding: 13,
          borderRadius: 10,
          marginTop: 40,
          color: "white",

        }}
      />

      {/* Input Contraseña */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.3)", width: 280, borderRadius: 8, marginTop: 10 }}>
        <TextInput
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#ddd"
          secureTextEntry={!passwordVisible}
          style={{
            flex: 1,
            padding: 12,
            color: "white",
          }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={{ padding: 10 }}>
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Contenedor de los dos botones */}
<View style={{ flexDirection: "row", justifyContent: "space-between", width: 280, marginTop: 8 }}>
  
  {/* Botón Olvido su contraseña (Izquierda) */}
  <TouchableOpacity onPress={() => alert("Olvido su contraseña")}>
    <Text style={{ color: "yellow", fontSize: 12 }}>Olvidó su contraseña</Text>
  </TouchableOpacity>

  {/* Botón Restablecer Contraseña (Derecha) */}
  <TouchableOpacity onPress={() => alert("Restablecer contraseña")}>
    <Text style={{ color: "yellow", fontSize: 12 }}>Restablecer contraseña</Text>
  </TouchableOpacity>

</View>

      {/* Botón Iniciar Sesión */}
      <TouchableOpacity 
        style={{
          backgroundColor: "#3CB371", 
          padding: 12, 
          borderRadius: 8, 
          marginTop: 16, 
          width: 280
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Línea divisora */}
      <View style={{ height: 1, width: "80%", backgroundColor: "white", marginVertical: 16 }} />

      {/* Texto "O ingresa con" */}
      <Text style={{ color: "white", marginBottom: 10 }}>O ingresa con</Text>

      {/* Botón Google */}
      <TouchableOpacity 
        style={{ 
          backgroundColor: "white", 
          padding: 12, 
          borderRadius: 8, 
          flexDirection: "row", 
          alignItems: "center", 
          width: 280, 
          justifyContent: "center" 
        }}
      >
        <Image 
          source={require("../../assets/Images/google-icon.png")}  
          style={{ width: 20, height: 20, marginRight: 8 }} 
        />
        <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>Google</Text>
      </TouchableOpacity>

      {/* Enlace a Registro */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ marginTop: 16 }}>
        <Text style={{ color: "white" }}>
          ¿No tienes cuenta?{" "}
          <Text style={{ fontWeight: "bold", color: "#3CB371" }}>Regístrate ahora</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

