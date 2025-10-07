import React from "react";
import { View,Text,Image,ImageBackground,TouchableOpacity,StyleSheet,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import ScreenCard from "../components/ScreenCard";

const BG_URL = "https://i.ibb.co/C1L3wSC/13186366-5125962.jpg";
const LOGO_URL = "https://i.ibb.co/yyzQ43h/KU-Logo-PNG.png";

export default function ProfileScreen({ navigation }) {
  const currentUser = useSelector((s) => s.user.currentUser);
  const dispatch = useDispatch();

  return (
    <ImageBackground source={{ uri: BG_URL }} style={styles.bg}>
      <ScreenCard>
        <View style={styles.logoRow}>
          <Image source={{ uri: LOGO_URL }} style={styles.logo} resizeMode="contain" />
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View style={styles.fakeInput}>
          <Text style={styles.fakeInputText}>{currentUser?.firstname || ""}</Text>
        </View>
        <View style={styles.fakeInput}>
          <Text style={styles.fakeInputText}>{currentUser?.lastname || ""}</Text>
        </View>
        <View style={styles.fakeInput}>
          <Text style={styles.fakeInputText}>{currentUser?.studentid || ""}</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            dispatch(logout());
            navigation.replace("Login"); 
          }}
        >
          <Text style={styles.primaryBtnText}>OK</Text>
        </TouchableOpacity>
      </ScreenCard>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  logoRow: { flexDirection: "row",alignItems: "center" },
  logo: { width: 150, height: 120, marginBottom: 4 },
  headerText: { fontSize: 40, fontWeight: "700", marginBottom: 8 },
  fakeInput: {
    height: 48,
    borderRadius: 22,
    backgroundColor: "#ffffffff",
     borderWidth: 1,
    borderColor: "#9e9e9e",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  fakeInputText: { fontSize: 20 },
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
