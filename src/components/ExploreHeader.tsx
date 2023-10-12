import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { HEADERHEIGHT } from "../../constants";
import { theme } from "../../theme";

import Categories from "./Categories";
import Searchbar from "./SearchBar";
import { useState } from "react";

const ExploreHeader = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View>
      <View style={styles.headerContainer}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme["color-primary-500"]}
        />
        <View style={styles.nav}>
          <View>
            <Feather name="menu" size={30} color="white" />
          </View>
          <View style={styles.locationStyles}>
            <View style={styles.locationContainer}>
              <Text style={styles.topTextStyle}>Current Location</Text>
              <FontAwesome name="caret-down" color={"white"} size={20} />
            </View>
            <Text style={styles.textStyle}>New York, USA</Text>
          </View>
          <View style={styles.noticeStyle}>
            <View style={styles.noticeDot}></View>
            <Feather name="bell" size={20} color="white" />
          </View>
        </View>
        <Searchbar
          clicked={clicked}
          setClicked={setClicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>
      <Categories />
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    backgroundColor: theme["color-primary-500"],
    paddingTop: HEADERHEIGHT,
    paddingVertical: "10%",
    overflow: "hidden",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
  },

  noticeStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background (50% opacity)
    padding: 12,
    borderRadius: 30,
    position: "relative",
  },
  noticeDot: {
    width: 8,
    height: 8,
    backgroundColor: theme["color-info-600"],
    borderRadius: 30,
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
  locationStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  topTextStyle: {
    color: theme["color-primary-100"],
    marginRight: 5,
  },
});
