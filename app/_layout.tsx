import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { UserContextWrapper } from "@/UserContext";
const RootLayout = () => {
  return (
    <UserContextWrapper>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
        <Stack.Screen name="verify/[phone]" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserContextWrapper>
  );
};

export default RootLayout;
