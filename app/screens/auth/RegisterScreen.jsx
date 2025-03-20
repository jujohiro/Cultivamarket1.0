import { View, Text, TextInput, TouchableOpacity} from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1A3E20", padding: 24 }}>
      {/* Logo */}
      
      {/* Título */}
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Regístrate</Text>

      {/* Input Email */}
      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#ddd"
        style={{ backgroundColor: "white", width: 280, padding: 12, borderRadius: 8, marginTop: 16 }}
      />

      {/* Input Contraseña */}
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#ddd"
        secureTextEntry
        style={{ backgroundColor: "white", width: 280, padding: 12, borderRadius: 8, marginTop: 8 }}
      />

      {/* Botón de Registro */}
      <TouchableOpacity style={{ backgroundColor: "#FFD700", padding: 12, borderRadius: 8, marginTop: 16, width: 280 }}>
        <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>Registrarse</Text>
      </TouchableOpacity>

      {/* Enlace a Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "white", marginTop: 16, textDecorationLine: "underline" }}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
