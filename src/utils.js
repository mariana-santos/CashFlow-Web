import { addDays, format } from 'date-fns';

export const formatCurrency = (value) => {
    const numberValue = Number(value)
    return numberValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });
}

export const calculateFees = (value, fee) => {
    const numberValue = Number(value)
    const fees = (numberValue * fee) / 100;
    return numberValue + fees;
}

export const generateParcelas = (emprestimo) => {
    const { numeroParcelas, valorParcela } = emprestimo;
    const parcelas = [];

    for (let i = 1; i <= numeroParcelas; i++) {
    
        const parcela = {
            id: null,
            numero: i,
            dataVencimento: calculateDueDate(i),
            valor: valorParcela,
            statusPagamento: "pendente",
        };

        parcelas.push(parcela);
    }

    return parcelas;
}

const calculateDueDate = (numeroParcela) => {

    const dataAtual = new Date();
    const dataVencimento = addDays(dataAtual, numeroParcela * 30);
    return format(dataVencimento, 'dd/MM/yyyy');
}