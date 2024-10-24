import { Image, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

interface ItemPorps {
  id: number;
  name: string;
  time: string;
  isReceived: boolean;
  isMissed:boolean;
  isVideoCall: boolean;
  image: string;
}

const CallsList = ({ item }: { item: ItemPorps }) => {
  return (
    <View className="flex flex-row items-center justify-between px-2">
      <View className="flex flex-row gap-2">
        <Image
          source={{ uri: item.image }}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
        <View className="flex flex-col gap-1">
          <Text className={`${item.isMissed ? "text-red-500" : "text-white"}  text-[19px]`}>{item.name}</Text>
          <View className="flex flex-row items-start justify-center ">
            {item.isReceived ? (
              <Feather name="arrow-up-right" size={19} color="green" />
            ) : ( 
              <Feather name="arrow-down-left" size={19} color="red" />
            )}
            <Text className={`${item.isMissed ? "text-red-500" : "text-white"} text-xs `}>{item.time}</Text>
          </View>
        </View>
      </View>
      {item.isVideoCall ? (
        <Feather name="video" size={24} color="white" />
      ) : (
        <Feather name="phone" size={24} color="white" />
      )}
    </View>
  );
};

export default CallsList;
