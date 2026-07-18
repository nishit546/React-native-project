import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StudentDetails = () => {
  return (
    <View style={styles.card}>
      <Text>Name : Nishit Doshi</Text>
      <Text>Enrollment : 23CE001</Text>
      <Text>Department : Computer Engineering</Text>
    </View>
  );
};

export default StudentDetails;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
});