import Button from "@/components/button"
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (
    <>
      <main className='container h-screen flex items-center justify-center flex-col gap-10'>
        <h1 className='text-center font-bold text-3xl'>Página não encontrada</h1>
        <Button 
            href="/" 
            icon={<ArrowLongRightIcon className="h-6 w-6"/>}>
            Voltar à tela inicial
        </Button>
      </main>
    </>
  )
}
