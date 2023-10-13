import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { HEADERHEIGHT } from "../../constants";
import { theme } from "../../theme";
import ExploreHeader from "../components/ExploreHeader";
import UpcomingEvents from "../components/UpcomingEvents";
import Ad from "../components/Ad";
import NearByEvents from "../components/NearByEvents";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ExploreHeader />
      <UpcomingEvents />
      <Ad />
      <NearByEvents />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "0px 8px 30px rgba(80, 85, 136, 0.06);",
    flex: 1,
  },
});
