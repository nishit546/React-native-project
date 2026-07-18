import React from "react";
import { View, Text, StyleSheet } from "react-native";
const student = {
  name:"Nishit Doshi",
  Enrollment : "SUK250054CE055",
  Department : "Computer Engineering"
}
const StudentDetails = () => {
  return (
    <View style={styles.card}>
      <Text>{student.name}</Text>
      <Text>{student.Enrollment}</Text>
      <Text>{student.Department}</Text>
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