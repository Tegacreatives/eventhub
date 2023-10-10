import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

const Tab = createBottomTabNavigator();

const HomeRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme["color-primary-500"],
        tabBarStyle: { paddingBottom: 25, height: 80, paddingTop: 10 },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New Event"
        component={SavedScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name="add-box"
              size={30}
              color="white"
              style={{
                position: "absolute",
                overflow: "hidden",
                top: -40,
                padding: 14,
                borderRadius: 30,
                backgroundColor: theme["color-primary-500"],
                shadowColor: "#4A43EC", // Shadow color
                shadowOffset: { width: 0, height: 8 }, // Shadow offset
                shadowOpacity: 0.25, // Shadow opacity
                shadowRadius: 20, // Shadow radius
                elevation: 5, // Elevation for Android (ignored on iOS)
              }}
            />
          ),
          tabBarLabel: "",
          tabBarLabelStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { HomeRoute };
