import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Stack, Tabs } from "expo-router";
import { useAuthContext } from "./auth/context/AuthContext";

export default function TabsLayout() {
  const { user } = useAuthContext()!;

  return (
    <Tabs >
      <Tabs.Screen
        name="auth"
        options={{
          title: 'Auth',
          href: null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
        }}
      />
      <Tabs.Screen
        name="configs"
        options={{
          title: 'Configs',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
