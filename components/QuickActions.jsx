import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const QuickActions = () => {
  return (
    <View style={styles.container}>

      <Pressable style={styles.card}>
        <Text style={styles.text}>➕</Text>
        <Text>New Survey</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.text}>📄</Text>
        <Text>History</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.text}>👤</Text>
        <Text>Profile</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.text}>⚙️</Text>
        <Text>Settings</Text>
      </Pressable>

    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  card: {
    width: "42%",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
  },
});