import { View } from "react-native";
import { Slot, Stack } from "expo-router";
import Logo from "../components/Logo";

export default function layout() {
    return (
        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "#465568"},
                    headerTitle: "PROVSEARCH",
                    headerTitleStyle: {color: "#fff"},
                    headerLeft: () => <Logo/>
                }}
            />
        </View>
    )
}