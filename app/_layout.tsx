import { Stack } from "expo-router";
import { AuthProvider } from "../context/auth";
import React from "react";

export default function Root() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ AuthProvider>
  )
}
