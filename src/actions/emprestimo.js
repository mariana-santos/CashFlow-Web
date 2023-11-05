"use server"

import { revalidatePath } from "next/cache"

export async function create(data){
    const url = "http://localhost:8080/emprestimos"

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

    revalidatePath("/emprestimos")
    
}

export async function get(){
    const url = "http://localhost:8080/emprestimos"
    const resp = await fetch(url)
    
    if (resp.status !== 200) {
        if (typeof window !== 'undefined') alert("erro ao buscar dados dos empréstimos")
        return
    }

    return await resp.json()
}