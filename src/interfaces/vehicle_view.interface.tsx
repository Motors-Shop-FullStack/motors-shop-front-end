import { iCardType } from "./card.interface";

export interface iListVehicle {
  type?: "Moto" | "Carro";
  list: iCardType[];
}
