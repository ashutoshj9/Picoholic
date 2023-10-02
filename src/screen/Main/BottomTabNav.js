import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Search from "../Search";
import Setting from "../Setting";
import Ant from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const BottomNav = createBottomTabNavigator();

const BottomTabNav = () => {
  const navigation = useNavigation();
  return (
    <BottomNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontWeight: "800" },
        tabBarLabelPosition: "beside-icon",
        tabBarHideOnKeyboard: true,
        // tabBarActiveBackgroundColor: "rgba(0,0,0,0.1)"
        // tabBarStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
      }}
    >
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ant name="home" size={size} color={color} />;
          },
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ant name="search1" size={size} color={color} />;
          },
        }}
      />
      {/* <BottomNav.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ant name="setting" size={size} color={color} />;
          },
        }}
      /> */}
    </BottomNav.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
