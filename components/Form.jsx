import { useEffect, useState } from "react"
import { TextInput, View, Text, FlatList, Alert, Button } from "react-native";
import { SupplierCard } from "./SuppliersCard";
import { getSuppliers } from "../lib/APIService";


const Form = () => {
    const [material, setMaterial] = useState('');
    const [proveedores, setProveedores] = useState([]);
    // const [data, setData] = useState([]);

    // const getMovies = async () => {
    //     try {
    //         const response = await fetch('https://reactnative.dev/movies.json')
    //         const json = await response.json();
    //         setData(json.movies)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    useEffect(() => {
        getSuppliers().then((provs) => {
            setProveedores(provs)
        })
        // getMovies()
    })

    const handleSubmit = () => {
        alert(getSuppliers())
    }

    return(
        <View>
            <Text className="text-center uppercase font-bold mb-4 text-lg">Buscadoor de proveedores</Text>
            <TextInput 
                id="material"
                className="border border-black rounded p-2 mb-4"
                placeholder="Escriba el nombre del material o proveedor"
                onChangeText={newMaterial => setMaterial(newMaterial)}
                onSubmitEditing={handleSubmit}
            />
            <Button title="Submit" onPress={handleSubmit}/>
            {proveedores.length === 0 ? (
                <Text>Buscando...</Text>
            ): (
                <FlatList
                    data={proveedores}
                    keyExtractor={(prov) => prov.Id}
                    renderItem={({item}) => (
                        <SupplierCard prov={item}/>
                    )}
                />

            )}
        </View>
    )
}

export default Form;