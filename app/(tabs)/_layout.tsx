import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Stack, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      /> */}
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
  </Tabs>
  );
}
