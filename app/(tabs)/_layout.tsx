import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
