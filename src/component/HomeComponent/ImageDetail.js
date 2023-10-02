import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ant from "react-native-vector-icons/AntDesign";

const ImageDetail = ({ route }) => {
  const imageData = route.params.imageData;
  const [numLine, setNumLine] = useState(false);
  // console.log(imageData.user.name);
  return (
    <>
      <StatusBar backgroundColor={imageData.color} barStyle={"dark-content"} />
      <View
        style={[
          styles.imageDetailContainer,
          { backgroundColor: imageData.color },
        ]}
      >
        <View style={styles.imageLayout}>
          <Image
            source={{ uri: imageData.urls["raw"] }}
            style={styles.imageStyle}
          />
          <View style={styles.imagesDescriptionView}>
            <View style={styles.usernameView}>
              <Text style={styles.usernameStyle}>
                @{imageData.user.username}
              </Text>
              <Text style={styles.nameStyle}>{imageData.user.name}</Text>
              <View style={styles.socialStyle}>
                {imageData.user.instagram_username && (
                  <View style={styles.socialID}>
                    <Ant name="instagram" color={"#fff"} />
                    <Text style={styles.socialIDText}>
                      {imageData.user.instagram_username}
                    </Text>
                  </View>
                )}
                {imageData.user.twitter_username && (
                  <View style={styles.socialID}>
                    <Ant name="twitter" color={"#fff"} />
                    <Text style={styles.socialIDText}>
                      {imageData.user.twitter_username}
                    </Text>
                  </View>
                )}
                {/* <View style={styles.socialID}>
                  <Ant name="instagram" color={"#fff"} />
                </View> */}
              </View>
            </View>
            <View style={styles.bottomDescView}>
              <Text
                style={styles.imageDescText}
                numberOfLines={numLine ? 3 : 1}
                onPress={() => setNumLine(!numLine)}
              >
                {imageData.alt_description}
              </Text>
              <TouchableOpacity style={styles.likeButton}>
                <Ant
                  name={imageData.likes ? "heart" : "hearto"}
                  size={18}
                  color={"rgb(240,10,100)"}
                />
                <Text style={styles.likeText}>{imageData.likes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({
  imageDetailContainer: {
    flex: 1,
  },
  imageLayout: {
    margin: "2%",
  },
  imageStyle: {
    height: "100%",
    borderRadius: 10,
  },
  imagesDescriptionView: {
    position: "absolute",
    bottom: 0,
    height: 100,
    padding: "2%",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  bottomDescView: {
    // position: "absolute",
    // bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageDescText: {
    color: "#fff",
    flexShrink: 1,
    textTransform: "capitalize",
    fontSize: 12,
    fontWeight: "600",
    paddingRight: "2%",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    // position: "absolute",
    // right: 10,
    // bottom: 10,
  },
  likeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "900",
  },
  usernameView: {},
  usernameStyle: {
    color: "rgba(255,255,255,0.6)",
    fontStyle: "italic",
    fontSize: 12,
  },
  nameStyle: {
    color: "#fff",
    letterSpacing: 1,
    // fontStyle: 'italic'
  },
  socialStyle: {
    flexDirection: "row",
    gap: 10,
  },
  socialID: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  socialIDText: {
    fontSize: 10,
    color: "#fff",
    // fontStyle: "italic",
  },
});
