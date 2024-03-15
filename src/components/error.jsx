'use client'
import Button from "@/components/button";

export default function Error({error}) {
  return (
    <>
      <main className="flex flex-col gap-2 items-start container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-lg">
        <h2>Um erro aconteceu</h2>
        <p>{error.message}</p>
        <Button href="/">voltar para a home</Button>
      </main>
    </>
  )
} 