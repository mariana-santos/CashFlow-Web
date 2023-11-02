"use server"

import { revalidatePath } from "next/cache"

export async function create(data){
    const url = "http://localhost:8080/emprestimos"

    const dataExample = {
        "usuario": {
            "nome": "Marianaaaa",
            "email": "mariana@gmail.com",
            "cpf": "000.000.000-00",
            "dataNascimento": "28/03/2004",
            "cep": "00000000",
            "logradouro": "rua exemplo",
            "localidade": "São Paulo",
            "numero": 123,
            "uf": "SP",
            "valorDivida": 700,
            "telefone": 123
        },
        "tipoCredito": {
            "nome": "Empréstimosdsd",
            "taxaJuros": 5,
            "limiteMeses": 25,
            "rendaNecessaria": 7000
        },
        "valorContratado": 500,
        "taxaJuros": 5,
        "numeroParcelas": 10,
        "valorParcela": 60,
        "valorTotal": 600
    };

    const options = {
        method: "POST", 
        body: JSON.stringify(dataExample),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) return { error: "erro ao cadastrar"}

    revalidatePath("/emprestimo")
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