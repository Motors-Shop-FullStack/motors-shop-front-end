import { iNumber } from "../../interfaces/formatterNumber";

export const numberFormatter = (number: iNumber) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(number)
  );
