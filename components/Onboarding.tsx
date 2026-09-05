import { OnboardingItem } from "@/types";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding({
  item,
  next,
}: {
  item: OnboardingItem;
  next: () => void;
}) {
  return (
    <View className="flex-1 justify-center">
      <TouchableOpacity className="ml-3 mt-5">
        <Text className="text-lg text-primary font-semibold">Skip</Text>
      </TouchableOpacity>
      <View className="flex-1 gap-4 items-center justify-center">
        <Image source={item.img} resizeMode="contain" />

        <Text className="text-4xl w-[80%] mt-3 text-center mx-auto font-bold">
          {item.title}
        </Text>
        <Text className="tracking-wide text-gray-500 font-light w-[85%] leading-relaxed text-center mx-auto">
          {item.desc}
        </Text>

        <View className="w-full mt-7 flex-col gap-5">
          <TouchableOpacity
            onPress={next}
            className="p-5 mx-auto w-[80%]  bg-primary rounded-lg"
          >
            <Text className="text-white text-center font-semibold">
              Continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" rounded-lg">
            <Text className="text-primary text-center font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
