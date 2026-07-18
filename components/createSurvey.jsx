import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
// site , client , description , priority , date
const CreateSurvey = () => {
    const [siteName, setSiteName] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

const validateForm = () => {
    if(!siteName.trim() || !clientName.trim() || !description.trim() || !priority || !date.trim()){
        Alert.alert("Validation Error","Please fill all the required fields.");
        return;
    }
    Alert.alert("Success","Survey Created Successfully!");
}
 return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Survey</Text>

      <TextInput
        placeholder="Site Name"
        style={styles.input}
        value={siteName}
        onChangeText={setSiteName}
      />

      <TextInput
        placeholder="Client Name"
        style={styles.input}
        value={clientName}
        onChangeText={setClientName}
      />

      <TextInput
        placeholder="Description"
        multiline
        numberOfLines={4}
        style={[styles.input, styles.description]}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Priority</Text>

      <View style={styles.priorityContainer}>
        <Pressable
          style={[
            styles.priorityBtn,
            priority === "Low" && styles.selected,
          ]}
          onPress={() => setPriority("Low")}
        >
          <Text>Low</Text>
        </Pressable>

        <Pressable
          style={[
            styles.priorityBtn,
            priority === "Medium" && styles.selected,
          ]}
          onPress={() => setPriority("Medium")}
        >
          <Text>Medium</Text>
        </Pressable>

        <Pressable
          style={[
            styles.priorityBtn,
            priority === "High" && styles.selected,
          ]}
          onPress={() => setPriority("High")}
        >
          <Text>High</Text>
        </Pressable>
      </View>

      <TextInput
        placeholder="DD/MM/YYYY"
        style={styles.input}
        value={date}
        onChangeText={setDate}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Submit Survey</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 18,
  },

  description: {
    height: 100,
    textAlignVertical: "top",
  },

  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  priorityBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#22C55E",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#FFFFFF",
  },

  selected: {
    backgroundColor: "#22C55E",
  },

  priorityText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#22C55E",
  },

  selectedText: {
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "#22C55E",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default CreateSurvey;