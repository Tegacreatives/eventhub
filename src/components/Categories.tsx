import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import { theme } from "../../theme";

const categories = [
  {
    name: "Sports",
    color: "#F0635A",
    icon: require("../../assets/icons/ball.png"),
  },
  {
    name: "Music",
    color: "#F59762",
    icon: require("../../assets/icons/music.png"),
  },
  {
    name: "Food",
    color: theme["color-success-400"],
    icon: require("../../assets/icons/food.png"),
  },
  {
    name: "Art",
    color: "#46CDFB",
    icon: require("../../assets/icons/art.png"),
  },
];

interface ICategory {
  name: string;
  color: string;
  icon: ImageSourcePropType;
}

const CategoryItem = ({ item }: { item: ICategory }) => (
  <View style={[styles.item, { backgroundColor: item.color }]}>
    <Image source={item.icon} style={styles.iconStyle} />
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.color}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "90%",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 8,
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  iconStyle: {
    marginRight: 10,
  },
});
