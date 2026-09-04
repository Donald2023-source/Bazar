import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  const isLoaded = true;
  const isSignedIn = null;

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
}
