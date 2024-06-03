import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Stack, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs >
      <Tabs.Screen
        name="auth"
        options={{
          title: 'Auth',
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
