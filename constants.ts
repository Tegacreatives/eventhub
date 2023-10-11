import { Dimensions, StatusBar, Platform } from "react-native";

export const LISTMARGIN = 10;
export const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2;

const baseHeight = 10;
const iosNotch = 60;
const iosHeight = baseHeight + iosNotch;
let androidHeight = baseHeight;
let androidNotch = 0;
if (StatusBar.currentHeight) androidNotch = StatusBar.currentHeight;
androidHeight += androidNotch;

export const HEADERHEIGHT = Platform.OS === "ios" ? iosHeight : androidHeight;
