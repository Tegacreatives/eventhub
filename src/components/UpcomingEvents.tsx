import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SectionTitle from "./SectionTitle";

const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Upcoming Events" />
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
});
