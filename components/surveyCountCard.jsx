import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SurveyCountCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Today's Survey</Text>

      <Text style={styles.count}>12</Text>

      <Text>Completed Surveys</Text>
    </View>
  );
};

export default SurveyCountCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4CAF50",
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  count: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});