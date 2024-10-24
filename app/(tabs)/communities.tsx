import {
  Image,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import community from "../../public/images/community.png";
const Communities = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#030f04] flex items-center ">
      <View className=" flex h-full w-full items-center pt-20  gap-5">
        <View className="flex items-center justify-center mt-10">
          <Image source={community} className="h-[200px] w-[200px] mx-auto  " />
        </View>
        <View className="flex flex-col items-center justify-center gap-3">
          <Text className="text-xl font-bold text-white text-center">
            Stay connected with a community
          </Text>
          <Text className="text-white  text-center">
            Communities bring members together in topic-based groups , and make
            it easy to get admin annoucements. Any comm community you're added
            will appear here{" "}
          </Text>
          <Text className="text-blue-500">
            See example communities{" "}
          </Text>
        </View>

        <TouchableOpacity className="bg-[#249b4e] p-3 rounded-full">
          <Text className="text-black">Start your community</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Communities;
