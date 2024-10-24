import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Href, router } from "expo-router";
interface Props {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
}

const ChatList = ({ item }: { item: Props }) => {
  return (
    <View className="flex flex-row items-center gap-2 px-3 w-full ">
      <Image
        source={{ uri: item.image }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <TouchableHighlight
       
        onPress={() => router.push(`/messages/[contact]` as Href)}
      >
        <View className="flex flex-row justify-between w-[90%] items-center ">
          <View className="flex flex-col">
            <Text className="text-white font-bold text-lg">{item.name}</Text>
            <Text className="text-slate-400 ">{item.message}</Text>
          </View>
          <Text className="text-slate-400 ">{item.time}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ChatList;
