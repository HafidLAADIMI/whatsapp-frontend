import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import welcome from "../public/images/welcome.png";
import { router } from "expo-router";


const Index = () => {
  return (
    <SafeAreaView className=" h-full w-full m-0 p-0 bg-[#030f04] flex items-center justify-center">
      <View className="flex h-full w-full flex-col gap-6 px-3 py-6 items-center  ">
        <Text className="text-center text-2xl font-bold text-white">
          Welcome to WhatsApp
        </Text>
        <Image
          source={welcome}
          className="h-[300px] w-[300px]"
          resizeMode="contain"
        />
        <Text className="text-center text-slate-300 font-medium font-poppins text-[18px]>">
          Read our <Text className="text-blue-500">Privacy Policy</Text>Tap
          "Agree and Continue" to accept the{" "}
          <Text className="text-blue-500">Terms of Service</Text>
        </Text>
      
       <View >
          <TouchableOpacity onPress={()=>router.push('/otp')} className="w-full flex items-center justify-center rounded-lg bg-[#249b4e] p-3 mt-10">
            <Text className="text-xl font-poppins">Agree & Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor="#232D36" style="light" />
    </SafeAreaView>
  );
};

export default Index;
