import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Login from "./src/screen/Login/Login";
import BottomTabNav from "./src/screen/Main/BottomTabNav";
import ImageDetail from "./src/component/HomeComponent/ImageDetail";

const StackNav = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <StackNav.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <StackNav.Screen name="Login" component={Login} />
        <StackNav.Screen name="Main" component={BottomTabNav} />
        <StackNav.Screen name="Detail" component={ImageDetail} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
