import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Href, router, Tabs, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";

const TabLayout = () => {
  const [isClicked, setIsClicked] = useState(false);
  const path = usePathname();
 
  return (
    <View className="flex-1 bg-[#030f04] ">
      <View className="flex flex-row items-center justify-between mt-10 px-3">
        <Text className="text-2xl font-bold  text-white">
          {path == "/chats"
            ? "Whatsapp"
            : path == "/updates"
            ? "Status"
            : path == "/calls"
            ? "Calls"
            : "Communities"}
        </Text>
        <View className="flex flex-row items-center justify-center gap-3 relative">
          <Feather name="camera" size={24} color="white" />
          <TouchableOpacity
            onPress={() => router.push(`/search/[query]/?path=${path} ` as Href)}
            className={`${path == "/communities" ? "hidden" : ""}`}
          >
            <Ionicons
              name="search-sharp"
              size={24}
              color="white"
              className="w-[100px] h-[100px]"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
          <View
            className={`${
              isClicked
                ? "flex absolute top-10 right-[-1.5px]  bg-[#09280b]  flex-col items-start px-2 py-3 justify-center gap-4 rounded-md z-20"
                : "hidden"
            } `}
          >
            <TouchableOpacity>
              <Text className="text-white ">New group</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white ">New broadcast</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white ">Linked devices</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-white ">Starred messages</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                className="text-white "
                onPress={() => router.push("/settings")}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Tabs
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#030f04",
            height: 54,
            padding: 2,
            borderTopWidth: 0,
            borderColor: "black",
          },
          tabBarActiveTintColor: "#188038",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "white",
          },

          tabBarActiveBackgroundColor: "#030f04",
          tabBarInactiveBackgroundColor: "#030f04",
          tabBarInactiveTintColor: "white",
        }}
      >
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",

            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles" size={35} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="update" size={35} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="communities"
          options={{
            title: "Communities",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="people" size={35} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="phone-outline"
                size={35}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#030f04" style="light" />
    </View>
  );
};

export default TabLayout;
