import { View, Text, TextInput, TouchableOpacity} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1A3E20", padding: 24 }}>
      {/* Logo */}

      {/* Título */}
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Iniciar Sesión</Text>

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

      {/* Botón de Iniciar Sesión */}
      <TouchableOpacity style={{ backgroundColor: "#3CB371", padding: 12, borderRadius: 8, marginTop: 16, width: 280 }}>
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Enlace a Registro */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ color: "white", marginTop: 16, textDecorationLine: "underline" }}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
