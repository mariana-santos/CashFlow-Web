"use server"

import { revalidatePath } from "next/cache"


export async function createMultiple(data){
    const url = "http://localhost:8080/parcelas/batch"

    const options = {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
  
    if (resp.status !== 201) {
        const responseContent = await resp.json();
        console.error("Conteúdo da resposta do servidor:", responseContent);
        return { error: "erro ao cadastrar"};
    }

    revalidatePath("/parcelas")
}

export async function getById(id){
    const url = "http://localhost:8080/parcelas/" + id
    const resp = await fetch(url)
    
    if (resp.status !== 200) {
        if (typeof window !== 'undefined') alert("erro ao buscar dados da parcela")
        return
    }

    return await resp.json()
}