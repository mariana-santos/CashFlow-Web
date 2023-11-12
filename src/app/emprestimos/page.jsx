import NavBar from '@/components/navbar'
import Button from '@/components/button'
import { PlusIcon } from '@heroicons/react/24/solid'
import Card from './card.jsx'
import { get } from '@/actions/emprestimo.js'

export default async function Emprestimos() {

  const emprestimos = await get()

  return (
    <>
      <NavBar />

      <main className="container mt-10 mx-auto rounded p-4 max-w-7xl">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold">Empréstimos</h2>
          <Button href="/emprestimos/new" icon={<PlusIcon className="h-6 w-6" />}>
            novo empréstimo
          </Button>
        </div>

        <div className="flex gap-6 mt-6 flex-wrap">
          {emprestimos.map(emprestimo => <Card emprestimo={emprestimo} />)}
        </div>
      </main>
    </>
  )

}
