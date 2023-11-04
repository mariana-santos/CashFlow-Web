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