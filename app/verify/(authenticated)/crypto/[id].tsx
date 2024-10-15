import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useQuery } from "@tanstack/react-query";
import { Ionicons } from "@expo/vector-icons";

const categories = ["Overview", "News", "Orders", "Transactions"];

const Page = () => {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  const [activeIndex, setActiveIndex] = useState(0);

  const { data } = useQuery({
    queryKey: ["info", id],
    queryFn: async () => {
      const info = await fetch(`/api/info?ids=${id}`).then((res) => res.json());
      const logo = info[+id!];
      return logo;
    },
  });

  return (
    <>
      <Stack.Screen options={{ title: data?.name }} />
      <SectionList
        style={{ marginTop: headerHeight }}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(i) => i.title}
        sections={[{ data: [{ title: "Chart" }] }]}
        renderSectionHeader={() => (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingBottom: 10,
              backgroundColor: Colors.background,
              borderBottomColor: Colors.lightGray,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          >
            {categories.map((category, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setActiveIndex(i)}
                style={
                  activeIndex === i
                    ? styles.categoriesBtnActive
                    : styles.categoriesBtn
                }
              >
                <Text
                  style={
                    activeIndex === i
                      ? styles.categoryTextActive
                      : styles.categoryText
                  }
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 16,
              }}
            >
              <Text style={styles.subtitle}>{data?.symbol}</Text>
              <Image
                source={{ uri: data?.logo }}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                margin: 12,
              }}
            >
              <TouchableOpacity
                style={[
                  defaultStyles.pillButtonSmall,
                  {
                    backgroundColor: Colors.primary,
                    flexDirection: "row",
                    gap: 16,
                  },
                ]}
              >
                <Ionicons name="add" size={24} color="white" />
                <Text style={[defaultStyles.buttonText, { color: "white" }]}>
                  Buy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  defaultStyles.pillButtonSmall,
                  {
                    backgroundColor: Colors.primaryMuted,
                    flexDirection: "row",
                    gap: 16,
                  },
                ]}
              >
                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
                <Text
                  style={[defaultStyles.buttonText, { color: Colors.primary }]}
                >
                  Receive
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={(item) => (
          <>
            {/* CHART  */}
            <View
              style={{
                height: 500,
                backgroundColor: "green",
              }}
            ></View>
            <View style={[defaultStyles.block, { marginTop: 20 }]}>
              <Text style={styles.subtitle}>Overview</Text>
              <Text style={{ color: Colors.gray }}>
                Bitcoin (abbreviation: BTC; sign: ₿) is the first decentralized
                cryptocurrency. Nodes in the peer-to-peer bitcoin network verify
                transactions through cryptography and record them in a public
                distributed ledger, called a blockchain, without central
                oversight. Consensus between nodes is achieved using a
                computationally intensive process based on proof of work, called
                mining, that secures the bitcoin blockchain. Mining consumes
                large quantities of electricity and has been criticized for its
                environmental impact. Based on a free market ideology, bitcoin
                was invented in 2008 by Satoshi Nakamoto, an unknown person. Use
                of bitcoin as a currency began in 2009, with the release of its
                open-source implementation.: ch. 1  In 2021, El Salvador adopted
                it as legal tender. It is mostly seen as an investment and has
                been described by many scholars as an economic bubble. As
                bitcoin is pseudonymous, its use by criminals has attracted the
                attention of regulators, leading to its ban by several countries
                as of 2021.
              </Text>
            </View>
          </>
        )}
      ></SectionList>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  categoryTextActive: {
    fontSize: 14,
    color: "black",
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  categoriesBtnActive: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
});
