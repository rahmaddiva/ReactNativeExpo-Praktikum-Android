import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  sumberGambar: string;
  namaProduk: string;
  deskripsiProduk: string;
};

const imageMap: Record<string, any> = {
  "assets/images/laptop/hp_240_14inch.avif": require("../assets/images/laptop/hp_240_14inch.avif"),
  "assets/images/laptop/hp_elitebook.avif": require("../assets/images/laptop/hp_elitebook.avif"),
  "assets/images/laptop/hp_omnibook_5_16_inch.avif": require("../assets/images/laptop/hp_omnibook_5_16_inch.avif"),
  "assets/images/laptop/hp_omnibook_5_flip_14_inch.avif": require("../assets/images/laptop/hp_omnibook_5_flip_14_inch.avif"),
  "assets/images/laptop/hp-omen-16-dojo.avif": require("../assets/images/laptop/hp-omen-16-dojo.avif"),
};

const PlaceHolderImage = imageMap["assets/images/laptop/hp_240_14inch.avif"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
  },
  headerPanel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#222",
    borderRadius: 18,
    padding: 16,
    justifyContent: "flex-start",
    elevation: 2,
  },
  headerText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 16,
  },
  listPanel: {
    gap: 16,
  },
  panel: {
    backgroundColor: "#232323",
    borderRadius: 16,
    padding: 12,
    marginBottom: 3,
    alignItems: "center",
    flexDirection: "row",
    elevation: 1,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 18,
    backgroundColor: "#333",
  },
  infoBox: {
    flex: 1,
    justifyContent: "center",
  },
  lingkaran: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#277811",
    textAlign: "center",
    lineHeight: 54,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 0,
    elevation: 3,
  },
  textWhite: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  textKecil: {
    fontSize: 14,
    color: "#ccc",
  },
});

export default function Card({
  sumberGambar,
  namaProduk,
  deskripsiProduk,
}: Props) {
  const imageSource = imageMap[sumberGambar] || PlaceHolderImage;

  return (
    <View style={styles.panel}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.infoBox}>
        <Text style={styles.textWhite}>{namaProduk}</Text>
        <Text style={styles.textKecil}>{deskripsiProduk}</Text>
      </View>
    </View>
  );
}
