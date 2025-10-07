import React, { useState } from "react";
import {View,Text,Image,ImageBackground,TouchableOpacity,StyleSheet,} from "react-native";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/userSlice";
import CustomInput from "../components/CustomInput";
import ScreenCard from "../components/ScreenCard";

const BG_URL = "https://i.ibb.co/C1L3wSC/13186366-5125962.jpg";
const LOGO_URL = "https://i.ibb.co/yyzQ43h/KU-Logo-PNG.png";

export default function RegistrationScreen({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [studentid, setStudentid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onRegister = () => {
    dispatch(addProfile({ firstname, lastname, studentid, username, password }));
    navigation.replace("Login"); 
  };

  return (
    <ImageBackground source={{ uri: BG_URL }} style={styles.bg}>
      <ScreenCard>
        <View style={styles.logoRow}>
          <Image source={{ uri: LOGO_URL }} style={styles.logo} resizeMode="contain" />
          <Text style={styles.headerText}>Registration</Text>
        </View>

        <CustomInput placeholder="Firstname" value={firstname} onChangeText={setFirstname} />
        <CustomInput placeholder="Lastname" value={lastname} onChangeText={setLastname} />
        <CustomInput placeholder="StudentID" value={studentid} onChangeText={setStudentid} keyboardType="number-pad" />
        <CustomInput placeholder="Username" value={username} onChangeText={setUsername} />
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

        {/* ปุ่ม Register / Cancel ตามรูป */}
        <TouchableOpacity style={styles.primaryBtn} onPress={onRegister}>
          <Text style={styles.primaryBtnText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.primaryBtn, { backgroundColor: "#9e9e9e", marginTop: 8 }]}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.primaryBtnText}>Cancel</Text>
        </TouchableOpacity>
      </ScreenCard>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  logoRow: { flexDirection: "row",alignItems: "center" },
  logo: { width: 120, height: 150, marginBottom: 10 },
  headerText: { fontSize: 40, fontWeight: "500", marginBottom: 6 },
  primaryBtn: {
    height: 48,
    borderRadius: 22,
    backgroundColor: "#9e9e9e",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  
  primaryBtnText: { fontSize: 30, color: "#000000ff" },
});
