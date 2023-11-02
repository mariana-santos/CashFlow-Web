import toast from "react-hot-toast";

export async function get() {
    const url = "http://localhost:8080/tipoCreditos";

    try {
        const response = await fetch(url);

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
