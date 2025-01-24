import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import icedCoffeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeImg}
        resizeMode='cover'
        style={styles.image}>
        <Text style={styles.title}>Coffee shop</Text>
        <Link style={styles.link} href='/explore'>
          Explore
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
  },
});
