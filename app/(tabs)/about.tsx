import Profil from "@/components/Profil";
import { StyleSheet, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Profil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
  },
});
