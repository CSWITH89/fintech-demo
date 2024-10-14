import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams();
  console.log("ID", id);

  return (
    <View>
      <Text>DETAILS</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
