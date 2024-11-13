export async function getSuppliers() {

    const API_INEGI = "https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/restaurantes/21.17429,-86.84656/200/1a6ab489-d36f-49f1-a14a-ed6af8a8435e"

        try {
            const response = await fetch(API_INEGI)
            const json = await response.json();

            const Data = json;
            
            return Data.map((item) => {
                const {Id,Nombre,Telefono} = item
                return {
                    Id,
                    Nombre,
                    Telefono
                }
            })
            
        } catch (error) {
            console.error(error)
        }
}
