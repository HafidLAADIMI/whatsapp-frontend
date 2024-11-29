import {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router, useLocalSearchParams } from "expo-router";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { StatusBar } from "expo-status-bar";
import { verifyOtp } from "@/appwrite";
import axios from "axios";
import  {useUserContext}  from "@/UserContext";
const PhoneVerify = () => {
  const [loading, setLoading] = useState(false);
  const  {userId,username,number,profile,setProfile}=useUserContext();
  
  const generateImageUrl = (userId) => {
    // Use a service like robohash or picsum to generate an image
    return `https://robohash.org/${userId}?set=set3&size=200x200`;
  };
  
  // Usage with async/await
  useEffect(() => {
    // Generate and set the image URL whenever the user ID changes
    if (userId) {
      const newImageUrl = generateImageUrl(userId);
      setProfile(newImageUrl);
    }
  }, [userId]);
  // sepcific to the code field
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  
const formData=new FormData();
 
formData.append("username", username);
formData.append("number", number);
formData.append("profile", profile);
formData.append("id", userId);
// add the user to the database
const addUser = async (formData: FormData) => {
  try {
   console.log(formData);
    await axios
      .post("http://172.16.228.52:8080/user/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((repsonse) => {
        console.log("user added successfuly" + repsonse.data)
        alert("you have create a new account ");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Response Error:", error.response.data);
        } else if (error.request) {
          console.error("Request Error:", error.request);
        } else {
          console.error("Other Error:", error.message);
        }
        console.error("Full Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
};

  const confirmOtp = async () => {
    try {
      setLoading(true);
      await verifyOtp(userId as string, value);
      if (!userId || !value) {
        Alert.alert("Wrong code please try again");
        router.push("/otp" as Href);
        return;
      }
      setLoading(false);
      console.log("otp verified");
      addUser(formData);
      router.replace("/chats" as Href);
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong in confirmOtp function");
    }
  };

  return (
    <SafeAreaView className="flex h-full w-full items-center justify-center bg-[#232D36]">
      {loading ? (
        <ActivityIndicator
          color="green"
          size="large"
          className="flex items-center justify-center h-full w-full"
        />
      ) : (
        <View className="flex h-full w-full gap-6 px-3 py-6 items-center justify-center">
          <Text className="text-center text-2xl font-bold text-white">
            {" "}
            Verify : {number}
          </Text>
          <Text className="text-center text-slate-300 font-medium font-poppins text-[18px]">
            Enter the code we just texted you
          </Text>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({
              android: "sms-otp",
              default: "one-time-code",
            })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <TouchableOpacity onPress={() => router.push("/otp")}>
            <Text className="text-center text-blue-500 font-medium font-poppins">
              {" "}
              Wrong number?
            </Text>
          </TouchableOpacity>
          <View className="flex-1" />
          <View className="w-full px-6">
            <TouchableOpacity
              onPress={confirmOtp}
              className="bg-[#128C7E] p-3 w-full mt-2 flex justify-center items-center text-3xl"
            >
              <Text className="font-bold text-white">Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <StatusBar backgroundColor="#232D36" style="light" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    padding: 10,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#1d5512",
    textAlign: "center",
    color: "white",
  },
  focusCell: {
    borderColor: "#0BD953",
  },
});

const CELL_COUNT = 6;
export default PhoneVerify;
