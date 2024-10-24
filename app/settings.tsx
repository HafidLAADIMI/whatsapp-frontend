import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SettingsItem from "@/components/SettingsItem";
import { Stack } from "expo-router";

const settingsItems = [
  {
    id: 1,
    icon: <Ionicons name="key" size={26} color="white" />,
    name: "Account",
    description: "Security notifications, change number",
  },
  {
    id: 2,
    icon: <Fontisto name="locked" size={26} color="white" />,
    name: "Privacy",
    description: "Block contact , disapprearing messages",
  },
  {
    id: 3,
    icon: <MaterialIcons name="face" size={26} color="white" />,
    name: "Avatar",
    description: "Create,edit ,profile ,remove",
  },
  {
    id: 4,
    icon: <Ionicons name="key" size={26} color="white" />,
    name: "Account",
    description: "Security notifications, change number",
  },
  {
    id: 5,
    icon: <Fontisto name="locked" size={26} color="white" />,
    name: "Privacy",
    description: "Block contact , disapprearing messages",
  },
  {
    id: 6,
    icon: <MaterialIcons name="face" size={26} color="white" />,
    name: "Avatar",
    description: "Create,edit ,profile ,remove",
  },
  {
    id: 7,
    icon: <Ionicons name="key" size={26} color="white" />,
    name: "Account",
    description: "Security notifications, change number",
  },
  {
    id: 8,
    icon: <Fontisto name="locked" size={26} color="white" />,
    name: "Privacy",
    description: "Block contact , disapprearing messages",
  },
  {
    id: 9,
    icon: <MaterialIcons name="face" size={26} color="white" />,
    name: "Avatar",
    description: "Create,edit ,profile ,remove",
  },
  {
    id: 10,
    icon: <Ionicons name="key" size={26} color="white" />,
    name: "Account",
    description: "Security notifications, change number",
  },
  {
    id: 11,
    icon: <Fontisto name="locked" size={26} color="white" />,
    name: "Privacy",
    description: "Block contact , disapprearing messages",
  },
  {
    id: 12,
    icon: <MaterialIcons name="face" size={26} color="white" />,
    name: "Avatar",
    description: "Create,edit ,profile ,remove",
  },
];
const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#030f04]">
      {/* <Stack.Screen
        name="settings"
        options={{ title: "Settings", headerShown: true }}
      /> */}

      <ScrollView className="flex-1 bg-[#030f04]">
        <View className="flex flex-col h-full w-full  py-6  gap-5 ">
          <View className="flex flex-row items-center px-4 justify-between ">
            <View className="flex flex-row items-center gap-3">
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                className="h-[60px] w-[60px] rounded-full"
              />
              <View className="flex flex-col justify-center ">
                <Text className="text-white font-bold text-lg">
                  ALMUKHADRAM 😎
                </Text>
                <Text className="text-slate-400 ">Active</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-center gap-3">
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color="green"
              />
              {/* <EvilIcons name="arrow-down" size={30} color="green" /> */}
            </View>
          </View>
          <View className="h-[1px] bg-slate-600 w-full " />
          {/* <FlatList
            scrollEnabled={false}
            data={settingsItems}
            renderItem={({ item }) => <SettingsItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View className="h-6" />}
          /> */}
          {settingsItems.map((item) => (
            <View key={item.id}>
              <SettingsItem item={item} />
              <View className="h-6" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
