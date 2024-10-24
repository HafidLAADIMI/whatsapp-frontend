import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Stories from "@/components/Stories";
import { stories } from "../../public/index";

const Updates = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#030f04]">
      <Text className="text-white font-bold text-lg px-3 py-3">Status</Text>
      <View className="h-full w-full ">
        {/* <FlatList
          ItemSeparatorComponent={() => <View className="h-6" />}
          data={stories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Stories item={item} />}
        /> */}
        {stories.map((item) => (
          <View key={item.id}>
            <Stories item={item} />
            <View className="h-4" />
          </View>
        ))}
      </View>
      <StatusBar backgroundColor="#030f04" style="light" />
    </SafeAreaView>
  );
};

export default Updates;

const styles = StyleSheet.create({});
