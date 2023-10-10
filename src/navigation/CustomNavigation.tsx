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
        tabBarStyle: { height: 90 },
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
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-box" size={35} color={color} />
          ),
          tabBarLabel: "",
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
