import React, { FC } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

interface SearchBarProps {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (text: string) => void;
  setClicked: (clicked: boolean) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* Search Icon */}
        <Feather
          name="search"
          size={24}
          color="rgba(255, 255, 255, 0.8)"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="| Search..."
          placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* Cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="white"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* Cancel button, depending on whether the search bar is clicked or not */}
      {clicked ? (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity
            style={styles.closeButtonStyles}
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.filterStyle}>
          <View style={styles.filterIconStyle}>
            <MaterialIcons name="filter-list" size={20} color={"white"} />
          </View>
          <Text style={styles.filterTextStyle}>Filters</Text>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "75%",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "70%",
    color: "white",
  },
  filterStyle: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 8,
    borderRadius: 20,
  },
  filterIconStyle: {
    padding: 4,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 30,
  },
  filterTextStyle: {
    paddingLeft: 5,
    color: "white",
    fontSize: 16,
  },
  closeButtonStyles: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
  },
  closeText: {
    color: "white",
    fontSize: 15,
  },
});
