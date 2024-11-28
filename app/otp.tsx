import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router } from "expo-router";
import { countriesCode } from "../public/index";
import axios from "axios";
import { useUserContext } from "@/UserContext";
import { Picker } from "@react-native-picker/picker";
import { sendOtp } from "@/appwrite";
import * as DocumentPicker from "expo-document-picker";
const otp = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countriesCode[0].value
  );

  const { setUserId, setUsername, setNumber,number } = useUserContext();

  const sendingOtp = async () => {
    try {
      setLoading(true);
      const id = await sendOtp(number);

      if (!id) {
        Alert.alert("Wrong phone number please try again");
        router.push("/otp" as Href);
        return;
      }
      setUserId(id as string);
      console.log("otp sent");
      setLoading(false);
      router.push(`/verify/${number}` as Href);
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong in sending otp function");
    }
  };

  return (
    // <SafeAreaView className="flex h-full w-full items-center justify-center bg-[#297e18]">
    <SafeAreaView className="flex h-full w-full items-center justify-center bg-[#030f04]">
      {loading ? (
        <ActivityIndicator
          color="green"
          size="large"
          className="flex items-center justify-center h-full w-full"
        />
      ) : (
        <View className="flex h-full w-full gap-6 px-3 py-6 items-center justify-center">
          <Text className="text-2xl text-center font-bold text-slate-100">
            Enter your phone number
          </Text>
          <View className="flex flex-col">
            <Text className="text-slate-200 text-center">
              Whatsapp will send an SMS message to verify your phone number
            </Text>
          </View>

          {/* Input filed */}
          <View className="flex flex-col text-white w-full items-center justify-center   gap-5 mt-10 ">
            <View className="flex flex-col  w-full px-6">
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
              >
                {countriesCode.map((item, i) => (
                  <Picker.Item
                    key={i}
                    label={item.label}
                    value={item.value}
                    style={{
                      color: "white",
                      backgroundColor: "#232D36",
                      width: "80%",
                    }}
                  />
                ))}
              </Picker>
              <View className="h-[1px] w-full bg-green-500" />
            </View>
            <View className="flex flex-row gap-4 items-center justify-center">
              <Text className="text-white text-xl border-b border-green-500 ">
                {selectedCountry}
              </Text>
              <TextInput
                className="text-white text-xl border-b border-green-500 w-3/5"
                keyboardType="phone-pad"
                inputMode="tel"
                autoFocus
                onChangeText={(e) => setNumber(selectedCountry + e)} // Call the handler when input changes
              />
            </View>
            <View className="flex flex-row gap-4 items-center justify-center">
              <Text className="text-white text-xl border-b border-green-500 ">
                Username
              </Text>
              <TextInput
                className="text-white text-xl border-b border-green-500 w-3/5"
                inputMode="text"
                autoFocus
                onChangeText={(e) => setUsername(e)} // Call the handler when input changes
              />
            </View>
          </View>
          <View className="flex-1" />
          {/* "Next" button */}
          <View className="w-full px-6">
            <TouchableOpacity
              onPress={sendingOtp}
              className="bg-[#249b4e] p-3 w-full mt-2 flex justify-center items-center text-3xl"
            >
              <Text className="font-bold text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default otp;
