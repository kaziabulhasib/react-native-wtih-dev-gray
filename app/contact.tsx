import { View, Text, StyleSheet } from "react-native";
import React from "react";

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Page</Text>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle",
  },
});
