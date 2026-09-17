import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function App() {
  const [fileName, setFileName] = useState("");

  const pickPDF = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true
      });

      if (!result.canceled) {
        setFileName(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert("Hata", "PDF seçilemedi.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PDF Translation App</Text>

      <Text style={styles.subtitle}>
        Academic English → Turkish
      </Text>

      <TouchableOpacity style={styles.button} onPress={pickPDF}>
        <Text style={styles.buttonText}>PDF SEÇ</Text>
      </TouchableOpacity>

      {fileName !== "" && (
        <View style={styles.fileBox}>
          <Text style={styles.fileLabel}>Seçilen PDF:</Text>
          <Text style={styles.fileName}>{fileName}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#222",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  fileBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    width: "100%"
  },

  fileLabel: {
    fontSize: 14
  },

  fileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5
  }
});
