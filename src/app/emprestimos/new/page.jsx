"use client"

import { create } from "@/actions/emprestimo";
// import { get } from "@/actions/tiposCredito";

import Button from "@/components/button";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default async function NewEmprestimo() {
    const { push } = useRouter()

    async function onSubmit(formData){
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/emprestimos")
    }

    async function get() {
        try {
            const url = "http://localhost:8080/tiposCredito";
            const resp = await fetch(url);

            if (resp.status !== 200) {
                if (typeof window !== 'undefined') {
                    alert("erro ao buscar dados dos empréstimos");
                }
                return;
            }

            return resp.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const tiposCredito = get();

    return (
        <>
            <NavBar />

            <main className="container bg-blue-100 flex-1 p-10 mt-20 rounded-md border-blue-300 border- mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold">Novo Empréstimo</h2>

                <form action={onSubmit} className="flex flex-col items-start gap-2 mt-2">
                    <InputText name="valor" label="Valor contratado" />
                    <select>
                        {/* {tiposCredito.map(tipo => {
                            return(
                                <option value={tipo.nome}>{tipo.nome} </option>
                            )
                        })} */}
                        
                    </select>
                    <InputText name="nome" label="nome" />
                    <Button type="button">salvar</Button>
                </form>

            </main>
        </>
    )
}