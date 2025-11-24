import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Slot, SplashScreen, Tabs } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("user");
      setIsLoggedIn(!!user);
      SplashScreen.hideAsync();
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) return null;

  return isLoggedIn ? (
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
  ) : (
    <Slot />
  );
}
