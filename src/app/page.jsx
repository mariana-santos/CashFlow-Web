"use client"

import { useForm } from "react-hook-form"
import InputText from "@/components/input-text";
import Button from "@/components/Button";

import { AuthContext } from "@/context/AuthContext"

import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function Home() {

  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const { push } = useRouter();

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha)

    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/emprestimos")
  }

  return (
    <>
      <main className="container">
        <div className="h-screen flex flex-col" > 
          <h2 className="text-center mt-5 font-extrabold text-lg">Money Wrench</h2>
          <form className="flex flex-col gap-4 p-4 m-auto" onSubmit={handleSubmit(onSubmit)}>
            <InputText label="email" register={register} name="email" />
            <InputText label="senha" register={register} name="senha" type="password" />
            <Button type="button">entrar</Button>
          </form>
        </div>
      </main>
    </>
  )
}
