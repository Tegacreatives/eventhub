import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HEADERHEIGHT } from "../../constants";
import { theme } from "../../theme";
import ExploreHeader from "../components/ExploreHeader";

const HomeScreen = () => {
  return (
    <View>
      <ExploreHeader />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: HEADERHEIGHT,
  },
});
