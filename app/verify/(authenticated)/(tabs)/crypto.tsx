import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/interfaces/crypto";
import { Link } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const Crypto = () => {
  const headerHeight = useHeaderHeight();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });

  const ids = currencies.data
    ?.map((currency: Currency) => currency.id)
    .join(",");

  console.log("ids", ids);

  const { data } = useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  const validKeys = Object.keys(data || {});

  console.log("VALID KEYS", validKeys);

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      <View style={defaultStyles.block}>
        {validKeys?.map((key: any) => (
          <Link
            href={`../crypto/${data?.[key].id}`}
            key={data?.[key].id}
            asChild
          >
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
            >
              <Image
                source={{ uri: data?.[key].logo }}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ flex: 1, gap: 6 }}>
                <Text style={{ fontWeight: "600", color: Colors.dark }}>
                  {data?.[key].name}
                </Text>
                <Text style={{ color: Colors.gray }}>{data?.[key].symbol}</Text>
              </View>
              <View style={{ gap: 6, alignItems: "flex-end" }}>
                <Text>{`${(Math.random() * 1001).toFixed(2)} €`} </Text>
                <View style={{ flexDirection: "row", gap: 4 }}>
                  <Ionicons name="arrow-up" size={16} color="green" />
                  <Text
                    style={{
                      color: "green",
                    }}
                  >
                    {`${(Math.random() * 100).toFixed(2)}%`}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default Crypto;

const styles = StyleSheet.create({});
