import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function InputForm({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  onInputChange,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        onChangeText={(data) => onInputChange(data)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "80%",
    marginBottom: 30,
  },
  inputField: {
    height: "60%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  labelInput: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
  },
});
