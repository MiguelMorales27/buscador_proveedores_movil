import { useState } from "react"
import { TextInput, View, Text } from "react-native";

const Form = () => {
    const [text, setText] = useState('');

    return(
        <View>
            <Text className="text-center uppercase font-bold mb-4 text-lg">Buscadoor de proveedores</Text>
            <TextInput 
                className="border border-black rounded p-2"
                placeholder="Escriba el nombre del material o proveedor"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text>{text}</Text>
        </View>
    )
}

export default Form;