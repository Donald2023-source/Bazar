import { Redirect } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const isSignedIn = false;
  const isLoaded = true;
  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;

  return (
    <SafeAreaView className="">
      <Text>Index app</Text>
    </SafeAreaView>
  );
}
