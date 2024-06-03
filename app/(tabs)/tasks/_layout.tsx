import { Redirect, Stack } from 'expo-router'
import { useAuthContext } from '../auth/context/AuthContext';

export default function _layout() {
  const {user} = useAuthContext()!;

  if (!user.isLoggedIn) {
    return (
        <Redirect href="/auth" />
    )
  }
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
  )
}