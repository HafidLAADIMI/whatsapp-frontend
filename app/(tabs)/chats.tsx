import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ChatList from "@/components/ChatList";
import { chatListInfo } from "@/public";


const Chats = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#030f04]">
      <View className="h-full w-full ">
        <FlatList
          ItemSeparatorComponent={() => <View className="h-6" />}
          data={chatListInfo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ChatList item={item} />}
        />
      </View>
      <StatusBar backgroundColor="#030f04" style="light" />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({});
