"use server"

import { revalidatePath } from "next/cache"

export async function create(data){
    const url = "http://localhost:8080/emprestimo"

    const options = {
        method: "POST", 
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) return { error : "erro ao cadastrar"}

    revalidatePath("/emprestimo")
}

export async function get(){
    const url = "http://localhost:8080/emprestimo"
    const resp = await fetch(url)
    
    if (resp.status !== 200) {
        if (typeof window !== 'undefined') alert("erro ao buscar dados dos empréstimos")
        return
    }

    return await resp.json()
}