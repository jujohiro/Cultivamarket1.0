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

export default function RegisterScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ImageBackground 
      source={require("../../assets/Images/login-background.png")} 
      style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      {/* Logo */}
      <Image 
        source={require("../../assets/Images/logo.png")}  
        style={{ width: 350, height: 150, marginBottom: 50 }}
        resizeMode="contain"
      />

      {/* Texto "Regístrate y elige tu rol" */}
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        “Regístrate y elige tu rol”
      </Text>

      {/* Input Email */}
      <TextInput
        placeholder="Ingresa tu correo electrónico"
        placeholderTextColor="#ddd"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          width: 280,
          padding: 13,
          borderRadius: 10,
          marginTop: 10,
          color: "white",
        }}
      />

      {/* Input Contraseña */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.3)", width: 280, borderRadius: 8, marginTop: 10 }}>
        <TextInput
          placeholder="Crea una contraseña segura"
          placeholderTextColor="#ddd"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          style={{ flex: 1, padding: 12, color: "white" }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={{ padding: 10 }}>
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input Confirmar Contraseña */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.3)", width: 280, borderRadius: 8, marginTop: 10 }}>
        <TextInput
          placeholder="Confirmar contraseña"
          placeholderTextColor="#ddd"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={{ flex: 1, padding: 12, color: "white" }}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={{ padding: 10 }}>
          <Ionicons name={confirmPasswordVisible ? "eye" : "eye-off"} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Contenedor de los botones */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: 280, marginTop: 8 }}>
        <TouchableOpacity onPress={() => alert("Olvidé mi contraseña")}>
          <Text style={{ color: "yellow", fontSize: 12 }}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "yellow", fontSize: 12 }}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Registrarme */}
      <TouchableOpacity 
        style={{
          backgroundColor: "#3CB371", 
          padding: 12, 
          borderRadius: 8, 
          marginTop: 16, 
          width: 280
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Registrarme</Text>
      </TouchableOpacity>

      {/* Términos y condiciones */}
      <Text style={{ color: "white", fontSize: 10, textAlign: "center", marginTop: 10 }}>
        *Al registrarte, aceptas nuestros{" "}
        <Text style={{ textDecorationLine: "underline" }}>Términos y condiciones</Text> y{" "}
        <Text style={{ textDecorationLine: "underline" }}>Política de privacidad</Text>
      </Text>

      {/* Texto "Regístrate con" */}
      <Text style={{ color: "white", marginTop: 10 }}>Regístrate con</Text>

      {/* Botón Google */}
      <TouchableOpacity 
        style={{ 
          backgroundColor: "white", 
          padding: 12, 
          borderRadius: 8, 
          flexDirection: "row", 
          alignItems: "center", 
          width: 280, 
          justifyContent: "center", 
          marginTop: 10
        }}
      >
        <Image 
          source={require("../../assets/Images/google-icon.png")}  
          style={{ width: 20, height: 20, marginRight: 8 }} 
        />
        <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>Google</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
