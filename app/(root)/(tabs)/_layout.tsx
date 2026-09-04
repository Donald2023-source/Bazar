import { Ionicons } from "@expo/vector-icons";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon src={<VectorIcon family={Ionicons} name="home-outline" />} />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Icon src={<VectorIcon family={Ionicons} name="search-outline" />} />
        <Label>Search</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <Icon src={<VectorIcon family={Ionicons} name="heart" />} />
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon src={<VectorIcon family={Ionicons} name="person-outline" />} />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
