import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets ? (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      ) : null}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>
          Ready to change the way you make money?
        </Text>
      </View>
      <View style={styles.buttons}>
        <Link
          href={"/login"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              Login
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "#fff" },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    color: "white",
    textTransform: "uppercase",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
