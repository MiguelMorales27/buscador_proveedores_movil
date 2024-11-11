import { useState } from "react"
import { TextInput, View, Text, FlatList, Alert, Button } from "react-native";
import APIService from "../services/APIService";
import { obtenerProveedores } from "../lib/axios";

const Form = () => {
    const [material, setMaterial] = useState('');
    const [proveedores, setProveedores] = useState([]);

    // async function obtenerProveedores() {
    //     const {data} = await APIService.buscarProveedores(material);
    //     proveedores.value = data
    // }

    const handleSubmit = () => {
        alert(material)
    }

    return(
        <View>
            <Text className="text-center uppercase font-bold mb-4 text-lg">Buscadoor de proveedores</Text>
            <TextInput 
                id="material"
                className="border border-black rounded p-2"
                placeholder="Escriba el nombre del material o proveedor"
                onChangeText={newMaterial => setMaterial(newMaterial)}
                onSubmitEditing={handleSubmit}
            />
            {/* <Text>{material}</Text> */}
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    )
}

export default Form;