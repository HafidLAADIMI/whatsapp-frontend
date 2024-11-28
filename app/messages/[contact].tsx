import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo, Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from "react-native";
import { usePathname } from "expo-router";
import { useUserContext } from "@/UserContext";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import { ID } from "react-native-appwrite";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState("disconnected");
  const { userId,profile } = useUserContext();
  const receiverId = usePathname().split("/")[2];
  // const socketRef = useRef<WebSocket | null>(null);
  const clientRef = useRef<Client | null>(null);
  const textInputRef = useRef<TextInput | null>(null);
  const pathToReceiver = `/user/${receiverId}/private`;
  console.log(pathToReceiver);

  useEffect(() => {
    // Initialize STOMP client
    const client = new Client({
      brokerURL: "ws://192.168.137.1:8080/ws",
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      logRawCommunication: true,
      reconnectDelay: 5000, // Retry every 5 seconds if connection fails
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      debug: (str) => {
        console.warn("Stomp Debug:" + str);
      },
      onConnect: () => {
        console.log("Connected to STOMP !!!!!!!!!!!!!!!!");
        setConnectionStatus("connected");

        // Subscribe to private messages for this user
        client.subscribe(`/user/${userId}/private`, (message) => {
          console.log("Raw message body:", message.body);
          try {
            const receivedMessage = JSON.parse(message.body);
            console.log("Received message structure:", Object.keys(receivedMessage));
            console.log("Received message:", receivedMessage);
            setMessages((prev) => [...prev, receivedMessage] as never);
            console.log("messages after receiving message : "+messages);
          } catch (error) {
            console.error("Error parsing message:", error);
          }
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from STOMP");
        setConnectionStatus("disconnected");
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
        setConnectionStatus("error");
      },
    });

    client.activate();
    clientRef.current = client;

    // Cleanup function
    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
      }
    };
  }, [receiverId]);

  const sendMessage = async () => {
    if (
      !message.trim() ||
      !clientRef.current ||
      connectionStatus !== "connected"
    ) {
      console.log(
        "Cannot send message: ",
        !message.trim()
          ? "Empty message"
          : !clientRef.current
          ? "No client"
          : "Not connected"
      );
      return;
    }

    try {
      const newMessage = {
        id: 2,
        senderId: userId,
        receiverId: receiverId,
        message: message.trim(),
        timestamp: new Date().toISOString(),
        status: "chat",
      };

      // Send message via STOMP
      clientRef.current.publish({
        destination: "/app/private",
        body: JSON.stringify(newMessage),
      });
      console.log("sent message" + JSON.stringify(newMessage));
      // Update local state
      setMessages((prev) => [...prev, newMessage] as never);
      console.log("messages after sending message : "+messages);
      setMessage("");

      // Optional: Send via REST for persistence
      await axios.post("http://192.168.1.19:8080/message/send", newMessage, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      textInputRef.current?.clear();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


 
    return (
      <SafeAreaView className="flex w-full h-full bg-[#030f04] pt-4">
        {/* Header */}
        <View className="h-full w-full flex flex-col">
          <View className="flex flex-row items-center justify-between w-full py-3 bg-[#131814] px-2 border-b-[1px] border-[#181d23]">
            {/* Back Button and Profile */}
            <View className="flex flex-row gap-3 items-center">
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
            {/* Action Buttons */}
            <View className="flex flex-row gap-4 items-center">
              <Feather name="video" size={24} color="white" />
              <Feather name="phone" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          </View>
  
          {/* Chat Messages */}
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="px-4 py-5 gap-6">
              {messages.map((msg, index) => (
                <View
                  key={index}
                  className={`${
                    msg.senderId === userId
                      ? "bg-[#0a310d] self-end"
                      : "bg-[#c8dbf7] self-start"
                  } max-w-[75%] rounded-lg p-3 shadow-md`}
                >
                  <Text
                    className={`text-[16px] ${
                      msg.senderId === userId ? "text-white" : "text-black"
                    }`}
                  >
                    {msg.message}
                  </Text>
                  <View className="flex flex-row items-center self-end mt-2">
                    <Text className="text-[12px] text-[#8a9aa9]">
                      {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                    <MaterialIcons
                      name="done"
                      size={16}
                      color={msg.senderId === userId ? "#249b4e" : "#475569"}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
  
          {/* Message Input */}
          <View className="flex flex-row items-center px-4 py-3 bg-[#131814]">
            <View className="flex flex-row items-center bg-[#1d2521] rounded-full flex-1 px-4 py-2 gap-3">
              <Entypo name="emoji-happy" size={24} color="white" />
              <TextInput
                ref={textInputRef}
                className="text-white flex-1"
                placeholder="Type a message"
                placeholderTextColor="#8a9aa9"
                onChangeText={(e) => setMessage(e)}
                value={message}
              />
              <Ionicons name="attach" size={24} color="white" />
              <Feather name="camera" size={24} color="white" />
            </View>
            <View className="ml-3 bg-[#249b4e] rounded-full p-3">
              {message === "" ? (
                <MaterialIcons name="keyboard-voice" size={28} color="black" />
              ) : (
                <MaterialIcons
                  name="send"
                  size={28}
                  color="black"
                  onPress={sendMessage}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
};

export default Contact;
