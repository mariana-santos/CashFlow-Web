import Button from "@/components/button";

export default function Card({ emprestimo }){
    return(
        <div className="card bg-blue-100 flex-1 p-7 max-w-[30%] mt-5 rounded-md border-blue-300 border-2 justify-center text-center items-center">
            <h3 className="font-extrabold text-2xl mb-3">{ emprestimo.tipoCredito.nome }</h3>
            <p className="mb-1 text-lg">Dívida Ativa: <strong>R$ { emprestimo.valorContratado }</strong></p>

            <p className="text-xs mb-1">Taxa: {emprestimo.taxaJuros}% </p>
            <p className="mb-4">Pagamento total em até: {emprestimo.numeroParcelas}x </p>

            <Button>Novo pagamento</Button>
        </div>
    )
}