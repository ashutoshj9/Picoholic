import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const accessKey =
  "Bearer Client-ID oH10BSfN4kD8x0HUSFBhj2W8X-W9eLYnl8_et5EliKg";

const sampleData = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  },
];

const BottomBody = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  //#region Get Image Api
  const getPhotos = async () => {
    setLoading(true);
    await axios
      .get("https://api.unsplash.com/photos", {
        headers: { Authorization: accessKey },
      })
      .then((response) => setImageList(response.data))
      .catch((err) => setImageList([]));
    setLoading(false);
  };
  useEffect(() => {
    getPhotos();
  }, []);
  //#endregion

  const renderImages = ({ item }) => (
    <TouchableOpacity
      style={styles.imageButton}
      onPress={() => navigation.navigate("Detail", { imageData: item })}
    >
      <Image
        source={{ uri: item.urls["small"] }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.BottomBodyContainer}>
      <FlatList
        data={imageList}
        renderItem={renderImages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getPhotos} />
        }
      />
    </View>
  );
};

export default BottomBody;

const styles = StyleSheet.create({
  BottomBodyContainer: {
    flex: 1,
    padding: "2%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  imageButton: {
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    height: 100,
    width: "100%",
    borderRadius: 5,
  },
});
