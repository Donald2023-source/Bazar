import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log("Handle Signup");
    //
  };
  return (
    <SafeAreaView className="px-5 font-sans mt-7 flex-1">
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons size={25} name="arrow-back-outline" />
        </TouchableOpacity>

        <View className="mt-16">
          <Text className="font-bold text-3xl">Sign Up</Text>
          <Text className="text-gray-500 font-roboto text-lg mt-2">
            Create account and choose favorite menu
          </Text>

          {/* Form */}
          <View className="flex-col gap-4 mt-7">
            <View>
              <Text className="font-semibold">Name</Text>
              <TextInput
                className="bg-gray-200 p-5 mt-2 rounded-lg"
                placeholderTextColor="#9ca3af"
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View>
              <Text className="font-semibold">Email</Text>
              <TextInput
                className=" bg-gray-200 p-5 mt-2 rounded-lg"
                placeholderTextColor="#9ca3af"
                placeholder="Your email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View className="w-full">
              <Text className="font-semibold">Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  className=""
                  placeholderTextColor="#9ca3af"
                  placeholder="Your password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#B7B7B7"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
              <Text className="text-white font-bold text-center">Register</Text>
            </TouchableOpacity>

            <View style={styles.account}>
              <Text style={styles.grayText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/sign-in");
                }}
                className="text-primary"
              >
                <Text className="font-semibold text-primary">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-col items-center gap-3 justify-center">
        <Text className="text-gray-400">
          By clicking Register, you agree to our
        </Text>
        <TouchableOpacity>
          <Text className="text-primary mt-2 font-semibold text-sm">
            Terms and Data Policy
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 48,
    backgroundColor: "#54408C",
  },

  account: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  grayText: {
    color: "#9ca3af",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
    marginTop: 8,
  },
});
export default SignUp;
