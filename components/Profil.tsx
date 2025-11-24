import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const profileImage = require("../assets/images/user.png");

export default function Profil() {
  return (
    <View style={styles.profil}>
      <Image source={profileImage} style={styles.imageProfil} />
      <View style={styles.textContainer}>
        <Text style={styles.namaProfil}>John Doe</Text>
        <Text style={styles.emailProfil}>johndoe@example.com</Text>
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
