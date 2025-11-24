import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const imageMap: Record<string, any> = {
  "assets/images/laptop/hp_240_14inch.avif": require("../../assets/images/laptop/hp_240_14inch.avif"),
  "assets/images/laptop/hp_elitebook.avif": require("../../assets/images/laptop/hp_elitebook.avif"),
  "assets/images/laptop/hp_omnibook_5_16_inch.avif": require("../../assets/images/laptop/hp_omnibook_5_16_inch.avif"),
  "assets/images/laptop/hp_omnibook_5_flip_14_inch.avif": require("../../assets/images/laptop/hp_omnibook_5_flip_14_inch.avif"),
  "assets/images/laptop/hp-omen-16-dojo.avif": require("../../assets/images/laptop/hp-omen-16-dojo.avif"),
};

const dataCard = require("../../assets/dataCard.json");

type Post = {
  id: number;
  sumberGambar: string;
  namaProduk: string;
  deskripsiProduk: string;
};

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filteredData = dataCard.posts.filter((item: Post) => {
    let idNumber: number;
    idNumber = +id;
    if (item.id === idNumber) {
      return item;
    }
  });

  const detail = filteredData[0];
  const imageSource = detail ? imageMap[detail.sumberGambar] : undefined;

  return (
    <View style={styles.container}>
      {imageSource && <Image style={styles.image} source={imageSource} />}
      <View style={styles.bottom}>
        <Text style={styles.title}>{detail?.namaProduk}</Text>
        <Text style={styles.description}>{detail?.deskripsiProduk}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 24,
    position: "absolute",
    marginTop: 330,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
});
