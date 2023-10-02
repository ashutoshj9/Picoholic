import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const accessKey =
  "Bearer Client-ID oH10BSfN4kD8x0HUSFBhj2W8X-W9eLYnl8_et5EliKg";

const TopPhotos = ({ setBackColor }) => {
  const navigation = useNavigation();
  const [randomPhotoData, setRandomPhotoData] = useState(null);
  const getRandomPhoto = async () => {
    await axios
      .get("https://api.unsplash.com/photos/random", {
        headers: { Authorization: accessKey },
      })
      .then((response) => {
        setRandomPhotoData(response.data);
        setBackColor(response.data.color);
      })
      .catch((err) => setRandomPhotoData(null));
  };
  useEffect(() => {
    getRandomPhoto();
  }, []);
  return (
    <View style={styles.topPhotosContainer}>
      <TouchableOpacity
        style={styles.photosLayout}
        onPress={() =>
          navigation.navigate("Detail", { imageData: randomPhotoData })
        }
      >
        {randomPhotoData && (
          <Image
            source={{ uri: randomPhotoData.urls["regular"] }}
            style={styles.imageStyle}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TopPhotos;

const styles = StyleSheet.create({
  topPhotosContainer: {
    marginVertical: "2%",
  },
  photosLayout: {
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
