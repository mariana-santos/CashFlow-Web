import toast from "react-hot-toast";

import { cookies } from 'next/headers'

const token = cookies().get('moneywrench_jwt')?.value

export async function get() {
    const url = "http://localhost:8081/tipoCreditos";

    try {
        const options = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const response = await fetch(url + "/" + id, options)

        if (response.status !== 200) {
            toast.error("Erro ao buscar dados dos tipos de crédito");
            return;
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Erro na requisição:", error);
        toast.error("Erro ao buscar dados dos tipos de crédito");
        return null;
    }
}
