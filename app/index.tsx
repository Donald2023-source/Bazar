import Onboarding from "@/components/Onboarding";
import { onboardingData } from "@/constanst/Onboarding-data";
import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [active, setActive] = useState(0);

  const isSignedIn = false;
  const isLoaded = true;

  const router = useRouter();

  if (!isLoaded) return null;

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  const currentSlide = onboardingData[active];

  const handleNext = () => {
    if (active < onboardingData.length - 1) {
      setActive((prev) => prev + 1);
      console.log(active);
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <SafeAreaView className="flex-1 px-3 bg-white">
      <Onboarding next={handleNext} item={currentSlide} />
    </SafeAreaView>
  );
}
