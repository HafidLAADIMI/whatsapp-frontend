import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import ChatList from "@/components/ChatList";
import Stories from "@/components/Stories";
import { chatListInfo, stories } from "@/public";
import { callslist } from "@/public";
import CallsList from "@/components/CallsList";
const Search = () => {
  const { path } = useLocalSearchParams();
  const handleTextChange = (e: string) => {};
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center bg-[#030f04]">
      <View className="flex flex-col h-full w-full gap-6 items-center px-3 py-4 ">
        <View className="flex flex-row px-2 bg-slate-900 w-full h-14 rounded-3xl">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row items-center gap-2"
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <TextInput
            placeholder={`Search in ${
              path === "/chats"
                ? "Chats"
                : path === "/updates"
                ? "Stories"
                : path === "/calls"
                ? "Calls"
                : "Communities"
            }`}
            onTextInput={(e) => handleTextChange(e.nativeEvent.text)}
            placeholderTextColor="#7c7c7c"
            className="w-[90%] py-1 ml-2 pl-3 text-white"
          />
        </View>
        <View className="w-full h-full ">
          {path === "/chats" ? (
            <FlatList
              ItemSeparatorComponent={() => <View className="h-6" />}
              data={chatListInfo}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ChatList item={item} />}
            />
          ) : path === "/updates" ? (
            <FlatList
              ItemSeparatorComponent={() => <View className="h-6" />}
              data={stories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Stories item={item} />}
            />
          ) : (
            <View className="h-full w-full ">
              <Text className="text-white mb-4 text-xl">Recent</Text>
              {/* <FlatList data={callslist} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=> <CallsList item={item} 
             />} ItemSeparatorComponent={() => <View className="h-4" />}/> */}
              {callslist.map((item) => (
                <View key={item.id}>
                  <CallsList item={item} />
                  <View className="h-4" />
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
