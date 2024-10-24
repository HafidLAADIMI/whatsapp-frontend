import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import Foundation from "@expo/vector-icons/Foundation";
import CallsList from "@/components/CallsList";
import { callslist } from "@/public";
/*************  ✨ Codeium Command 🌟  *************/
interface ItemPorps {
  id: number;
  name: string;
  time: string;
  isReceived: boolean;
  isMissed: boolean;
  isVideoCall: boolean;
  image: string;
}

const Calls = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#030f04]">
      <ScrollView>
        <View className="flex h-full w-full flex-col py-6 px-3 gap-5">
          <View className="flex flex-col  justify-center gap-1">
            <Text className="text-white text-xl">Favourites</Text>
            <View className="flex flex-row items-center gap-4">
              <View className="rounded-full bg-[#249b4e] px-3 py-2">
                <Foundation name="heart" size={24} color="black" />
              </View>
              <Text className="text-white">Add favourite</Text>
            </View>
          </View>
          <View className="h-full w-full ">
            <Text className="text-white mb-4 text-xl">Recent</Text>
            {/* <FlatList data={callslist} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=> <CallsList item={item} 
             />} ItemSeparatorComponent={() => <View className="h-4" />}/> */}
            {callslist.map((item) => (
              <View key={item.id} >
                <CallsList item={item} />
                <View className="h-4" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calls;
