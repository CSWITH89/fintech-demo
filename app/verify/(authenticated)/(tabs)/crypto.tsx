import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/interfaces/crypto";

const Crypto = () => {
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

  return (
    <View>
      {currencies.data?.map((currency: Currency, i: number) => (
        <View style={{ flexDirection: "row" }} key={currency.id}>
          <Image
            source={{ uri: data?.[i + 1].logo }}
            style={{ width: 50, height: 50 }}
          />
          <Text>{currency.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Crypto;

const styles = StyleSheet.create({});
