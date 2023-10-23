import { View, Text } from "react-native";
import React from "react";
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

const NearByEvents = () => {
  return (
    <View>
      <SectionTitle title="Nearby You" />
      <EventCard />
    </View>
  );
};

export default NearByEvents;
