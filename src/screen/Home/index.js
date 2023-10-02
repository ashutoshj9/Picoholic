import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TopPhotos from "../../component/HomeComponent/TopPhotos";
import BottomBody from "../../component/HomeComponent/BottomBody";

const Home = () => {
  const [backColor, setBackColor] = useState("#fff");
  return (
    <View style={[styles.container, { backgroundColor: backColor }]}>
      <StatusBar backgroundColor={backColor} barStyle={"dark-content"} />
      <TopPhotos setBackColor={(color) => setBackColor(color)} />
      <BottomBody />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "2%",
  },
});
