import React, { useEffect, useState } from "react";
import { View,Text,Image, ImageBackground, TouchableOpacity, Alert, StyleSheet, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";
import CustomInput from "../components/CustomInput";
import ScreenCard from "../components/ScreenCard";

const BG_URL = "https://i.ibb.co/C1L3wSC/13186366-5125962.jpg"; 
const LOGO_URL = "https://i.ibb.co/yyzQ43h/KU-Logo-PNG.png";  

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((s) => s.user.users);
  const currentUser = useSelector((s) => s.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigation.replace("Profile");
    }
  }, [currentUser]);

  const handleLogin = () => {
    if (users.length === 0) {
      Alert.alert("No user in the system yet");
      return;
    }
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) {
      Alert.alert("Wrong username or password");
      dispatch(setCurrentUser(null));
      return;
    }
    dispatch(setCurrentUser(found));
  };

  return (
    <ImageBackground source={{ uri: BG_URL }} style={styles.bg}>
      <ScreenCard>
        <View style={styles.logoRow}>
          <Image source={{ uri: LOGO_URL }} style={styles.logo} resizeMode="contain" />
        </View>

        <CustomInput placeholder="Username" value={username} onChangeText={setUsername} />
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

        <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
          <Text style={styles.primaryBtnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          style={{ alignSelf: "flex-end", marginTop: 6 }}
        >
          <Text style={styles.link}>Registration</Text>
        </TouchableOpacity>
      </ScreenCard>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  logoRow: { alignItems: "center" },
  logo: { width: 150, height: 120, marginBottom: 12 },
  headerText: { fontSize: 40, fontWeight: "700", marginBottom: 8 },
  primaryBtn: {
    height: 48,
    borderRadius: 22,
    backgroundColor: "#9e9e9e",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  primaryBtnText: { fontSize: 30, color: "#000000ff" },
  link: { fontSize: 14, color: "#4060c9ff", textDecorationLine: "underline" },
});
