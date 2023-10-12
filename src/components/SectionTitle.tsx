import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../theme";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.viewStyles}>
        <Text style={styles.viewTextStyles}>See All</Text>
        <FontAwesome name="caret-right" size={20} color={theme["color-gray"]} />
      </View>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  viewStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  viewTextStyles: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: "400",
    color: theme["color-gray"],
  },
});
