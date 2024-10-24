import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo, Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from "react-native";
const Contact = () => {
  const [message, setMessage] = useState("");
  const profile =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <SafeAreaView className="flex w-full h-full  bg-[#030f04]">
      <View className="h-full w-full flex flex-col  pt-7 ">
        <View className="flex flex-row items-center justify-between w-full py-3 bg-[#131814]  px-2 z-30 border-b-[1px] border-[#181d23] ">
          <View className="flex flex-row gap-2 items-center ">
            <AntDesign
              name="arrowleft"
              size={28}
              color="white"
              onPress={() => router.back()}
            />
            <Image
              source={{ uri: profile }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-[17px] text-white font-bold">Hafid</Text>
          </View>
          <View className="flex flex-row gap-5 items-center justify-center">
            <Feather name="video" size={24} color="white" />
            <Feather name="phone" size={24} color="white" />
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className=" h-full flex px-3 py-5   gap-6">
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#0a310d] max-w-[55%] rounded-lg  flex flex-col self-end  py-1 px-2`}
            >
              <Text className="text-white">Hello this is Hafid !</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className=" font-bold text-[#475569]">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
            <View
              className={` bg-[#c8dbf7] max-w-[55%] px-2 py-1 rounded-lg flex flex-col   `}
            >
              <Text>Hello Hafid how are u ?</Text>
              <View className="flex flex-row gap-1 items-center self-end mr-1">
                <Text className="text-slate-600 font-bold">11:28</Text>
                <MaterialIcons name="done" size={14} color="#475569" />
              </View>
            </View>
          </View>
        </ScrollView>
        <View className=" flex flex-row  px-4 z-30  items-center ">
          <View className="flex flex-row gap-2 items-center py-1 bg-[#131814] rounded-full">
            <Entypo
              name="emoji-happy"
              size={27}
              color="white"
              className="text-slate-500"
            />
            <TextInput
              className="text-white w-[58%] h-full outline-one py-1 px-2 "
              placeholder="Message"
              placeholderTextColor="white"
              onChangeText={(e) => setMessage(e)}
            />
            <Ionicons name="attach" size={27} color="white" />
            <Feather name="camera" size={27} color="white" />
          </View>
          <View className="p-2 bg-[#249b4e] rounded-full flex items-center justify-center ">
            {message === "" ? (
              <MaterialIcons name="keyboard-voice" size={31} color="black" />
            ) : (
              <MaterialIcons name="send" size={31} color="black" />
            )}
          </View>
        </View>
      </View>
      {/* <StatusBar  style="dark" /> */}
    </SafeAreaView>
  );
};

export default Contact;
