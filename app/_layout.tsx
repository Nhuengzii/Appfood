import { Stack } from "expo-router";
import { AuthProvider } from "../context/auth";

export default function Root() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ AuthProvider>
  )
}
