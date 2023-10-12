import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { theme } from "../../theme";
import { Feather } from "@expo/vector-icons";

const events = [
  {
    id: "1",
    name: "International Band Music",
    image: require("../../assets/images/brandmusic.png"),
    location: "36 Guild Street London, UK",
    date: "10 June",
  },
  {
    id: "2",
    name: "International Band Music",
    image: require("../../assets/images/brandmusic.png"),
    location: "36 Guild Street London, UK",
    date: "10 June",
  },
  {
    id: "3",
    name: "International Band Music",
    image: require("../../assets/images/brandmusic.png"),
    location: "36 Guild Street London, UK",
    date: "10 June",
  },
];

interface IEvent {
  name: string;
  location: string;
  image: ImageSourcePropType;
  date: string;
}

const EventItem = ({ item }: { item: IEvent }) => (
  <View style={styles.eventContainer}>
    <Image source={item.image} style={styles.imageStyle} />
    <View style={styles.eventContentStyles}>
      <Text numberOfLines={1} style={styles.nameStyle}>
        {item.name}
      </Text>
      <View style={styles.locationStyles}>
        <Feather name="map-pin" size={18} color={theme["color-gray"]} />
        <Text numberOfLines={1} style={styles.locationTextStyles}>
          {item.location}
        </Text>
      </View>
    </View>
  </View>
);

const EventCard = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={events}
        renderItem={({ item }) => <EventItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 20,
  },
  eventContainer: {
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 335,
    width: 287,
  },
  eventContentStyles: {
    marginHorizontal: 5,
  },
  nameStyle: {
    fontSize: 25,
    fontWeight: "500",
    marginVertical: 15,
  },
  imageStyle: {
    height: "50%",
    width: "auto",
    borderRadius: 15,
  },
  locationStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationTextStyles: {
    color: theme["color-gray"],
    fontSize: 18,
    marginLeft: 5,
  },
});
