import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isSignedIn = false;
  const isLoaded = false;
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  console.log("isSignedIn from AuthLayout");

  return <Stack screenOptions={{ headerShown: false }} />;
}
