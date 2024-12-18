import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundBtn from "@/app/components/RoundBtn";
import Dropdown from "@/app/components/Dropdown";
import { useBalanceStore } from "@/app/store/balanceStore";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import WidgetList from "@/app/components/SortableList/WidgetList";

const Home = () => {
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();
  const headerHeight = useHeaderHeight();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date().toLocaleDateString(),
      title: "Added money",
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 600 }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>€</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn
          icon={"add"}
          text={"Add money"}
          onPress={() => {
            onAddMoney();
          }}
        />
        <RoundBtn
          icon={"refresh"}
          text={"Exchange"}
          onPress={clearTransactions}
        />
        <RoundBtn icon={"list"} text={"Details"} />
        <Dropdown />
      </View>
      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 ? (
          <Text
            style={{
              padding: 20,
              color: Colors.gray,
            }}
          >
            No transactions yet
          </Text>
        ) : (
          transactions.map((t) => {
            return (
              <View
                key={t.id}
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View style={styles.circle}>
                  <Ionicons
                    name={t.amount > 0 ? "arrow-up" : "arrow-down"}
                    size={20}
                    color={t.amount > 0 ? "green" : "red"}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontWeight: "400" }}>{t.title}</Text>
                    <Text style={{ color: Colors.gray }}>{t.date}</Text>
                  </View>
                  <Text>{t.amount}</Text>
                </View>
              </View>
            );
          })
        )}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
