import React from "react";
import { View, StyleSheet } from "react-native";

export default function ScreenCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 24,
    backgroundColor: "white",
    padding: 18,

    // โค้งเฉพาะ "ซ้ายบน" กับ "ขวาล่าง"
    borderTopLeftRadius: 28,
    borderBottomRightRadius: 28,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,

    // ให้บุตรโดนตัดตามมุมโค้ง
    overflow: "hidden",
  },
});
