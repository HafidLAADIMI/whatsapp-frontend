import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ChatList from "@/components/ChatList";
import { useUserContext } from "@/UserContext";
import { usePathname } from "expo-router";
import axios from "axios";

const Chats = () => {
  const [data, setData] = useState([]);
  const {userId}=useUserContext();
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://172.16.228.52:8080/user/getAll");
      console.log(response.data);
      setData(response.data);
      console.log({ data });
    } catch (error: any) {
      if (error.response) {
        console.error("Response Error:", error.response.data);
      } else if (error.request) {
        console.error("Request Error:", error.request);
      } else {
        console.error("Other Error:", error.message);
      }
      console.error("Full Error:", error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const [refresh,setRefresh]=useState(false);
  const pathName = usePathname();
  console.log(pathName);
  const filtredData=data.filter((item)=>item.id!==userId)
  return (
    <SafeAreaView className="flex-1 bg-[#030f04]">
      <View className="h-full w-full ">
        <FlatList
          ItemSeparatorComponent={() => <View className="h-6" />}
          data={filtredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ChatList item={item} />}
          refreshing={refresh}
          onRefresh={async()=>{
              setRefresh(true);
              await getAllUsers();
              setRefresh(false);
          }}
        />
      </View>
      <StatusBar backgroundColor="#030f04" style="light" />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({});
