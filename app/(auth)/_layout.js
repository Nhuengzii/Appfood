import { Stack } from "expo-router";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="sign-in" />
    <Stack.Screen name="register" />
    <Stack.Screen name="agreement" options={{ presentation: "modal" }} />
  </Stack>
}
