import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Welcome </Text>
      <Text>Enjoy your productive day!</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});