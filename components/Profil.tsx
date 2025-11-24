import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const profileImage = require("../assets/images/user.png");

export default function Profil() {
  const [user, setUser] = useState<{ nama: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const getUser = async () => {
      const userStr = await AsyncStorage.getItem("user");
      if (userStr) {
        const userObj = JSON.parse(userStr);
        setUser(userObj);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.profil}>
      <Image source={profileImage} style={styles.imageProfil} />
      <View style={styles.textContainer}>
        <Text style={styles.namaProfil}>{user?.nama || "-"}</Text>
        <Text style={styles.emailProfil}>{user?.email || "-"}</Text>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profil: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#222",
    borderRadius: 18,
    padding: 16,
    justifyContent: "flex-start",
    elevation: 2,
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: "#c00",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageProfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    flexDirection: "column",
  },
  namaProfil: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  emailProfil: {
    fontSize: 16,
    color: "#ccc",
  },
});
