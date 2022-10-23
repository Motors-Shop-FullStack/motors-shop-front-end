import { iNumber } from "../../interfaces/formatterNumber.interface";

export const numberFormatter = (number: iNumber) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    Number(number)
  );
