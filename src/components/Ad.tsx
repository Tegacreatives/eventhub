import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";

const Ad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.inviteTextStyles}>Invite your friends</Text>
        <Text style={styles.discountTestStyles}>Get $20 for your ticket</Text>
        <Button
          style={styles.inviteButtonStyles}
          appearance="filled"
          status="info"
          size="medium"
        >
          INVITE
        </Button>
      </View>
      <Image
        style={styles.imageStyles}
        source={require("../../assets/images/ad-image.png")}
      />
    </View>
  );
};

export default Ad;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0, 248, 255, 0.2)",
    marginHorizontal: 15,
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "relative",
    height: 140,
    borderRadius: 15,
    overflow: "hidden",
  },
  textContainer: {
    marginRight: 10,
  },
  inviteTextStyles: {
    fontSize: 26,
    fontWeight: "600",
  },
  discountTestStyles: {
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 8,
  },
  inviteButtonStyles: {
    //backgroundColor: "#00F8FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
  },
  inviteButtonTextStyles: {
    fontSize: 18,
    color: "white",
  },
  imageStyles: {
    position: "absolute",
    right: -30,
    width: 260, // Set the desired width of the image

    resizeMode: "cover",
  },
});
