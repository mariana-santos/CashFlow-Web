"use client"

import { create } from "@/actions/emprestimo";
import { get } from "@/actions/tiposCredito";

import Button from "@/components/button";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function NewEmprestimo() {

    const [tiposCredito, setTiposCredito] = useState([])

    const { push } = useRouter()

    async function onSubmit(formData){
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/emprestimos")
    }

    useEffect(() => {
        async function fetchTiposCredito() {
            try {
                setTiposCredito(await get());
            } catch (error) {
                toast.error("Erro ao buscar dados dos tipos de crédito");
            }
        }

        fetchTiposCredito();
    }, []);

    return (
        <>
            <NavBar />

            <main className="container bg-blue-100 flex-1 p-10 mt-20 rounded-md border-blue-300 border- mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold">Novo Empréstimo</h2>

                <form action={onSubmit} className="flex flex-col items-start gap-2 mt-2">
                    <InputText name="valor" label="Valor contratado" />
                    <select>
                        {tiposCredito?.map(tipo => {
                            return(
                                <option value={tipo.nome}>{tipo.nome} </option>
                            )
                        })}
                    </select>
                    <InputText name="nome" label="nome" />
                    <Button type="button">salvar</Button>
                </form>

            </main>
        </>
    )
}