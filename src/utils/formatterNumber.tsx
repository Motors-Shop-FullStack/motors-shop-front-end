export const numberFormatter = (number: number) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(number)
  );
