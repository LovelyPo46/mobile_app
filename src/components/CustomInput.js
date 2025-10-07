import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CustomInput({placeholder, value, onChangeText,secureTextEntry,keyboardType,}) 
{
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  // ขนาดตัวอักษรในกล่องข้อความ = 20 (ตามใบงาน)
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#bcb6b6ff",
    backgroundColor: "#fff",
    borderRadius: 22,
    paddingHorizontal: 16,
    marginVertical: 6,
    fontSize: 20,
  },
});
