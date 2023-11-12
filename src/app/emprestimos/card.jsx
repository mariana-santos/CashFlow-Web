import Button from "@/components/button";
import { formatCurrency } from "@/utils";

export default function Card({ emprestimo }){
    return(
        <div className="card bg-blue-100 flex-1 p-7 max-w-[30%] mt-5 rounded-md border-blue-300 border-2 justify-center text-center items-center">
            <h3 className="font-extrabold text-2xl mb-3 uppercase">{ emprestimo.tipoCredito.nome }</h3>
            <p className="mb-1 text-lg">Dívida Ativa: 
                <strong> R$ { formatCurrency(emprestimo.valorContratado) }</strong>
            </p>

            <p className="mb-1 mt-3 text-slate-700">
                Taxa: <strong>{emprestimo.tipoCredito.taxaJuros}%</strong> 
            </p>
            <p className="mb-5 text-slate-700">
                Pagamento total em até: <strong>{emprestimo.numeroParcelas}x</strong>
            </p>

            <Button>Novo pagamento</Button>
        </div>
    )
}