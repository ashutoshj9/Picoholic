import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchedImagesView = ({ searchedData }) => {
  const navigation = useNavigation();
  const renderSearched = ({ item }) => (
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
        data={searchedData}
        renderItem={renderSearched}
        keyExtractor={(item) => item.id}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchedImagesView;

const styles = StyleSheet.create({
  BottomBodyContainer: {
    flex: 1,
    // padding: "5%",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: "#fff",
  },
  imageButton: {
    margin: 10,
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    height: 200,
    width: "100%",
    borderRadius: 2,
  },
});
