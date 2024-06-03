import { Stack } from "expo-router";
import { AuthContextProvider } from "./(tabs)/auth/context/AuthContextProvider";
import { TaskConentextProvider } from "./(tabs)/tasks/context/TaskConentextProvider";
import { PaperProvider } from "react-native-paper";


export default function RootLayout() {

  const theme = {
    colors: {
      primary: '#7c7c7c',
      secondary: '#f0f0f0',
      background: '#f0f0f0',
      card: '#7c7c7c',
      text: '#f8f8f8',
      border: '#464646',
      notification: '#464646',
    },
    roundness: 10,
  };

  return (
    <AuthContextProvider>
    <TaskConentextProvider>
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not_found" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
    </TaskConentextProvider>
  </AuthContextProvider>
  );
}
