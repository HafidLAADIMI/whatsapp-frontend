import { Image, Text, TouchableHighlight, View } from "react-native";
import { Href, router } from "expo-router";
import { useUserContext } from "@/UserContext";
import * as Crypto from 'expo-crypto';
import { useEffect } from "react";
interface Props {
  id: string;
  username: string;
  message: string;
  time: string;
  image: string;
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Generates a random image URL based on the provided identifier.
 *
 * @param id - The unique identifier used to generate the image.
 * @returns A URL string pointing to a randomly selected image.
 */
/******  c77d9fc0-4256-441a-bc9d-a338b517e81b  *******/ const ChatList = ({
  item,
}: {
  item: Props;
}) => {
 // Run only when userId changes
  return (
    <View className="flex flex-row items-center gap-2 px-3 w-full ">
      <Image
        source={{ uri: item.profile }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <TouchableHighlight
        onPress={() => router.push(`/messages/${item.id}` as Href)}
      >
        <View className="flex flex-row justify-between w-[90%] items-center ">
          <View className="flex flex-col">
            <Text className="text-white font-bold text-lg">
              {item.username}
            </Text>
            <Text className="text-slate-400 ">{item.message}</Text>
          </View>
          <Text className="text-slate-400 ">{item.time}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ChatList;
