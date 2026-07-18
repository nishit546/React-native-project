import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraPreview from "../../components/cameraPreview";

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions({ writeOnly: true });

  const cameraRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [captureTime, setCaptureTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!permission) {
      return;
    }

    if (!permission.granted) {
      requestPermission();
    } else {
      setLoading(false);
    }
  }, [permission]);

  const takePhoto = async () => {
    if (!cameraRef.current) return;

    const picture = await cameraRef.current.takePictureAsync();

    setPhoto(picture);
    setCaptureTime(new Date().toLocaleString());
  };

  const retakePhoto = () => {
    setPhoto(null);
  };

  const savePhoto = async () => {
    if (!photo) return;

    let currentPermission = mediaPermission;

    if (!currentPermission?.granted) {
      currentPermission = await requestMediaPermission();
    }

    if (!currentPermission?.granted) {
      Alert.alert(
        "Permission Required",
        "Allow access to your photo library to save photos."
      );
      return;
    }

    try {
      setSaving(true);
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      Alert.alert("Saved", "Photo saved to your gallery.");
    } catch {
      Alert.alert("Error", "Could not save the photo. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const deletePhoto = () => {
    Alert.alert(
      "Delete Photo",
      "Are you sure you want to delete this photo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => setPhoto(null),
        },
      ]
    );
  };

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Camera permission is required.</Text>

        <Pressable
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text>Opening Camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <CameraPreview
          photo={photo}
          captureTime={captureTime}
          onRetake={retakePhoto}
          onDelete={deletePhoto}
          onSave={savePhoto}
          saving={saving}
        />
      ) : (
        <>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
          />

          <Pressable
            style={styles.captureBtn}
            onPress={takePhoto}
          >
            <Text style={styles.buttonText}>Capture Photo</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  camera: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },

  captureBtn: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});