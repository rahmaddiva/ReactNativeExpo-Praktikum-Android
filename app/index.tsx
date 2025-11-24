import Card from "@/components/Card";
import { StyleSheet, View } from "react-native";

let dataCard = {
  error: false,
  message: "Berhasil mengambil data",
  posts: [
    {
      id: 1,
      sumberGambar: "assets/images/laptop/hp_240_14inch.avif",
      namaProduk: "HP 240 14inch",
      deskripsiProduk: "IntelCore i3-1005G1, 8GB RAM, 256GB SSD",
    },
    {
      id: 2,
      sumberGambar: "assets/images/laptop/hp_elitebook.avif",
      namaProduk: "HP EliteBook",
      deskripsiProduk: "Intel Core i5-8265U, 16GB RAM, 512GB SSD",
    },
    {
      id: 3,
      sumberGambar: "assets/images/laptop/hp_omnibook_5_16_inch.avif",
      namaProduk: "HP Omnibook 5 16 Inch",
      deskripsiProduk: "Intel Core i7-1165G7, 16GB RAM, 1TB SSD",
    },
    {
      id: 4,
      sumberGambar: "assets/images/laptop/hp_omnibook_5_flip_14_inch.avif",
      namaProduk: "HP Omnibook 5 Flip 14 Inch",
      deskripsiProduk: "Intel Core i7-1165G7, 16GB RAM, 1TB SSD",
    },
    {
      id: 5,
      sumberGambar: "assets/images/laptop/hp-omen-16-dojo.avif",
      namaProduk: "HP Omen 16 Dojo",
      deskripsiProduk: "Intel Core i7-1165G7, 16GB RAM, 1TB SSD",
    },
  ],
};

export default function Index() {
  return (
    <View style={styles.container}>
      <Card
        sumberGambar={"assets/images/laptop/hp_240_14inch.avif"}
        namaProduk={"HP 240 14inch"}
        deskripsiProduk={"IntelCore i3-1005G1, 8GB RAM, 256GB SSD"}
      />
      <Card
        sumberGambar={"assets/images/laptop/hp_elitebook.avif"}
        namaProduk={"HP EliteBook"}
        deskripsiProduk={"Intel Core i5-8265U, 16GB RAM, 512GB SSD"}
      />

      <Card
        sumberGambar={"assets/images/laptop/hp_omnibook_5_16_inch.avif"}
        namaProduk={"HP Omnibook 5 16 Inch"}
        deskripsiProduk={"Intel Core i7-1165G7, 16GB RAM, 1TB SSD"}
      />
      <Card
        sumberGambar={"assets/images/laptop/hp_omnibook_5_flip_14_inch.avif"}
        namaProduk={"HP Omnibook 5 Flip 14 Inch"}
        deskripsiProduk={"Intel Core i7-1165G7, 16GB RAM, 1TB SSD"}
      />
      <Card
        sumberGambar={"assets/images/laptop/hp-omen-16-dojo.avif"}
        namaProduk={"HP Omen 16 Dojo"}
        deskripsiProduk={"Intel Core i7-1165G7, 16GB RAM, 1TB SSD"}
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
