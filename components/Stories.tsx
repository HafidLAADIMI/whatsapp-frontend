import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
interface Props {
  id: number;
  name: string;
  isReadItem: boolean;
  time: string;
  image: string;
}

const Stories = ({ item }: { item: Props }) => {
  return (
    <View className="flex flex-row items-center justify-between px-3 w-full ">
      <View className="flex flex-row gap-2 ">
        <View className={`${item.isReadItem ? "border-slate-300" : "border-green-500"} border-2 rounded-full p-1`} >
        
          <Image
            source={{ uri: item.image }}
            style={{ width: 60, height: 60, borderRadius: 50 }}
            
          />
        </View>
        <View className="flex flex-col">
          <Text className="text-white font-bold text-lg">{item.name}</Text>
          <Text className="text-slate-400 ">{item.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Stories;
