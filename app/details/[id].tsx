import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const imageMap: Record<string, any> = {
  "assets/images/laptop/hp_240_14inch.avif": require("../../assets/images/laptop/hp_240_14inch.avif"),
  "assets/images/laptop/hp_elitebook.avif": require("../../assets/images/laptop/hp_elitebook.avif"),
  "assets/images/laptop/hp_omnibook_5_16_inch.avif": require("../../assets/images/laptop/hp_omnibook_5_16_inch.avif"),
  "assets/images/laptop/hp_omnibook_5_flip_14_inch.avif": require("../../assets/images/laptop/hp_omnibook_5_flip_14_inch.avif"),
  "assets/images/laptop/hp-omen-16-dojo.avif": require("../../assets/images/laptop/hp-omen-16-dojo.avif"),
  "assets/images/laptop/hp_pavilion.avif": require("../../assets/images/laptop/hp_pavilion.avif"),
};

const dataCard = require("../../assets/dataCard.json");

type Post = {
  id: number;
  sumberGambar: string;
  namaProduk: string;
  deskripsiProduk: string;
  prosesor?: string;
  ram?: string;
  storage?: string;
  layar?: string;
  fitur?: string;
  harga?: string;
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
  const { height } = useWindowDimensions();
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      {imageSource && <Image style={styles.image} source={imageSource} />}
      <Animated.View
        style={[styles.bottom, { transform: [{ translateY: slideAnim }] }]}
      >
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Kembali</Text>
        </Pressable>
        <Text style={styles.title}>{detail?.namaProduk}</Text>
        <Text style={styles.description}>{detail?.deskripsiProduk}</Text>
        {detail?.prosesor && (
          <Text style={styles.spec}>
            <Text style={styles.label}>Prosesor:</Text> {detail.prosesor}
          </Text>
        )}
        {detail?.ram && (
          <Text style={styles.spec}>
            <Text style={styles.label}>RAM:</Text> {detail.ram}
          </Text>
        )}
        {detail?.storage && (
          <Text style={styles.spec}>
            <Text style={styles.label}>Storage:</Text> {detail.storage}
          </Text>
        )}
        {detail?.layar && (
          <Text style={styles.spec}>
            <Text style={styles.label}>Layar:</Text> {detail.layar}
          </Text>
        )}
        {detail?.fitur && (
          <Text style={styles.spec}>
            <Text style={styles.label}>Fitur:</Text> {detail.fitur}
          </Text>
        )}
        {detail?.harga && (
          <Text style={styles.price}>
            <Text style={styles.label}>Harga:</Text> {detail.harga}
          </Text>
        )}
      </Animated.View>
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
    marginBottom: 10,
  },
  spec: {
    fontSize: 15,
    color: "#444",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
    color: "#222",
  },
  price: {
    fontSize: 16,
    color: "#277811",
    fontWeight: "bold",
    marginTop: 10,
  },
  backButton: {
    marginBottom: 16,
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  backText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
