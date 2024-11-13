import { View,Text } from "react-native";

export function SupplierCard({prov}){
    return (
        <View key={prov.Id} className="flex-row gap-4">
            <Text>{prov.Nombre}</Text>
            <Text>{prov.Telefono}</Text>
        </View>
    )
}