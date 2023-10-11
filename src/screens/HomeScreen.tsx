import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HEADERHEIGHT } from "../../constants";
import { theme } from "../../theme";
import ExploreHeader from "../components/ExploreHeader";
import UpcomingEvents from "../components/UpcomingEvents";

const HomeScreen = () => {
  return (
    <View>
      <ExploreHeader />
      <UpcomingEvents />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: HEADERHEIGHT,
  },
});
