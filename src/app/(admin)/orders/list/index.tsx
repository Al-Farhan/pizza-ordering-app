import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import { Text, View } from "@/src/components/Themed";
import OrderListItem from "@/src/components/OrderListItem";
import { Stack } from "expo-router";
import { useAdminOrderList } from "@/src/api/orders";

export default function OrdersScreen() {
  const {
    data: orders,
    error,
    isLoading,
  } = useAdminOrderList({ archived: false });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch orders</Text>;
  }

  return (
    <>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
}
