import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchTab from "../../component/SearchComponent/SearchTab";

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchTab />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "2%",
  },
});
