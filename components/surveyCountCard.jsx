import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SurveyCountCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Today's Surveys</Text>

      <Text style={styles.count}>12</Text>

      <Text style={styles.subtitle}>Completed Today</Text>

      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <Text style={styles.footer}>Target: 20 Surveys</Text>
    </View>
  );
};

export default SurveyCountCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#22C55E",
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,

    alignItems: "center",
  },

  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },

  count: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 15,
    color: "#E8F5E9",
    marginTop: 5,
    marginBottom: 18,
  },

  

  footer: {
    fontSize: 13,
    color: "#F0FDF4",
  },
});