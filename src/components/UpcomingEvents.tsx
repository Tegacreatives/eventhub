import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Upcoming Events" />
      <EventCard />
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});
