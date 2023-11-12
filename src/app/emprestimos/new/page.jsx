"use client";

import { create } from "@/actions/emprestimo";
import { get } from "@/actions/tiposCredito";
import { user } from "@/data/user";
import Button from "@/components/button";
import InputText from "@/components/input-text";
import Select from "@/components/select";
import Display from "@/components/display";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatCurrency, calculateFees, generateParcelas } from "@/utils";

export default function NewEmprestimo() {
  const [tiposCredito, setTiposCredito] = useState([]);
  const [tipoCredito, setTipoCredito] = useState(tiposCredito[0]);
  const [valorContratado, setValorContratado] = useState(100);
  const [numeroParcelas, setNumeroParcelas] = useState(1);
  const [valorParcela, setValorParcela] = useState(100);
  const [valorTotal, setValorTotal] = useState(105);

  const { push } = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    const emprestimo = {
      usuario: user,
      tipoCredito,
      valorContratado,
      numeroParcelas,
      valorParcela,
      valorTotal,
    }
    const data = {
      ...emprestimo,
      parcelas: generateParcelas(emprestimo)
    }

    console.log(JSON.stringify(data))

    const resp = await create(data)

    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/emprestimos")
  }

  useEffect(() => {
    async function fetchTiposCredito() {
      try {
        const tiposCreditoData = await get();
        setTiposCredito(tiposCreditoData);
        setTipoCredito(tiposCreditoData[0]);
      } catch (error) {
        toast.error("Erro ao buscar dados dos tipos de crédito");
      }
    }

    fetchTiposCredito();
  }, []);

  useEffect(() => {
    const novoValorTotal = calculateFees(valorContratado, tipoCredito?.taxaJuros);
    setValorTotal(novoValorTotal);
    setValorParcela(novoValorTotal / numeroParcelas);
  }, [valorContratado, tipoCredito, numeroParcelas])

  return (
    <>
      <NavBar />

      <main className="container bg-blue-100 flex-1 p-10 mt-20 rounded-md border-blue-300 border- mx-auto max-w-3xl mb-40">
        <h2 className="text-4xl font-bold">Novo Empréstimo</h2>

        <section className="flex gap-10 center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-start gap-2 mt-2 w-1/2"
          >
            <InputText
              name="valorContratado"
              label="Valor contratado"
              type="number"
              min={100}
              max={1000000}
              value={valorContratado}
              onChange={(e) => (e.target.value >= 100 && e.target.value <= 1000000) && setValorContratado(e.target.value)}
            />
            <Select
              options={tiposCredito}
              name="tipoCredito"
              label="Tipo de crédito"
              value={tipoCredito?.id}
              onChange={(e) => setTipoCredito(tiposCredito.find((tipo) => tipo.id === parseInt(e.target.value, 10)))}
            />
            <InputText
              name="numeroParcelas"
              label="Qtd. de Parcelas"
              type="number"
              min={1}
              value={numeroParcelas}
              onChange={(e) => (e.target.value >= 1 && e.target.value <= tipoCredito?.limiteMeses) && setNumeroParcelas(e.target.value)}
            />
            <Button type="submit">salvar</Button>
          </form>

          <div className="text-slate-700 mt-10 text-2xl w-1/2">
            <h2 className="text-2xl font-extrabold text-slate-950">Simulação</h2>
            <Display label="Total: " value={formatCurrency(valorTotal)} />
            <Display label={`${numeroParcelas}x de `} value={formatCurrency(valorParcela)} />
            <small>{tipoCredito?.taxaJuros}% de juros</small>
          </div>
        </section>
      </main>
    </>
  );
}
