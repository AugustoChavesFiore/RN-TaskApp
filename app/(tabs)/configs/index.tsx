import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { useAuthContext } from '../auth/context/AuthContext';

export default function Settings() {

  const {user} = useAuthContext()!;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Configuración</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>Modo Oscuro</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>Información de la Cuenta</Text>
        <Text>Nombre: {user.name}</Text>
        <Text>Email: {user.email}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>Otras Configuraciones</Text>
        <Text>Working</Text>
      </View>
    </View>
  )
}