import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecentSurvey = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Recent Survey</Text>

      <Text>Village : Gandhinagar</Text>

      <Text>Date : 17 July 2026</Text>

      <Text>Status : Submitted</Text>
    </View>
  );
};

export default RecentSurvey;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});