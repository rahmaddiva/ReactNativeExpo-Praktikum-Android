import Card from "@/components/Card";
import { FlatList, StyleSheet, View } from "react-native";

const dataCard = require("../../assets/dataCard.json");

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataCard.posts}
        renderItem={({ item, index }) => (
          <Card
            id={item.id}
            sumberGambar={item.sumberGambar}
            namaProduk={item.namaProduk}
            deskripsiProduk={item.deskripsiProduk}
          />
        )}
      />
    </View>
  );
}

// stylesheet untuk komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
  },
});
