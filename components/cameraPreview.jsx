import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

const CameraPreview = ({
  photo,
  captureTime,
  onRetake,
  onDelete,
  onSave,
  saving,
}) => {
  if (!photo) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Photo Preview</Text>

      <Image source={{ uri: photo.uri }} style={styles.image} />

      <Text style={styles.time}>
        Captured At: {captureTime}
      </Text>

      <Pressable
        style={[styles.saveBtn, saving && styles.btnDisabled]}
        onPress={onSave}
        disabled={saving}
      >
        <Text style={styles.btnText}>
          {saving ? "Saving..." : "Save to Gallery"}
        </Text>
      </Pressable>

      <Pressable style={styles.retakeBtn} onPress={onRetake}>
        <Text style={styles.btnText}>Retake Photo</Text>
      </Pressable>

      <Pressable style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.btnText}>Delete Photo</Text>
      </Pressable>
    </View>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#1F2937",
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginBottom: 15,
  },

  time: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },

  saveBtn: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },

  btnDisabled: {
    opacity: 0.6,
  },

  retakeBtn: {
    backgroundColor: "#16A34A",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },

  deleteBtn: {
    backgroundColor: "#DC2626",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});