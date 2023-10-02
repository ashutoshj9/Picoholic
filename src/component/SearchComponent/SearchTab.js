import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchedImagesView from "./SearchedImagesView";

const accessKey =
  "Bearer Client-ID oH10BSfN4kD8x0HUSFBhj2W8X-W9eLYnl8_et5EliKg";

const SearchTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedImages, setSearchedImages] = useState([]);

  //#region SearchedImage Api
  const searchPhotosAPI = async () => {
    await axios
      .get(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
        headers: { Authorization: accessKey },
      })
      .then((response) => setSearchedImages(response.data.results))
      .catch((err) => setSearchedImages([]));
  };
  useEffect(() => {
    searchPhotosAPI();
  }, [searchTerm]);
  //#endregion

  return (
    <>
      <View style={styles.searchTabView}>
        <TextInput
          placeholder="Search photos..."
          style={styles.searchInputStyle}
          onChangeText={(value) => {
            setSearchTerm(value);
          }}
        />
      </View>
      <SearchedImagesView searchedData={searchedImages} />
    </>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  searchTabView: {
    marginVertical: "2%",
  },
  searchInputStyle: {
    padding: "2%",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
});
