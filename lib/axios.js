// import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://www.inegi.org.mx/app/api/denue/v1/consulta'
// })

// export default api
export async function obtenerProveedores(material) {
    const proveedores = `https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/${material}/21.17429,-86.84656/5000/1a6ab489-d36f-49f1-a14a-ed6af8a8435e`

    const rawData = await fetch(proveedores);
    const json = await rawData.json();

    const {data : {items} } = json;

    return items.map((item) => {
        const {data} = item;
        
        return data
    })
}