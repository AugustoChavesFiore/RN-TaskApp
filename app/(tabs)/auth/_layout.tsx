import React from 'react'
import {  Stack } from 'expo-router'


export default function _layout() {
  return (
    <Stack
    screenOptions={{
    }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="screen/RegisterScreen" options={{ headerShown: false }} />
    <Stack.Screen name="screen/LoginScreen" options={{ headerShown: false }} />
    
  </Stack>

  )
}