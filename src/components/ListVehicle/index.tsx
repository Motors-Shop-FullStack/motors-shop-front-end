import { iCardType } from "../../interfaces/card.interface";
import { Typography } from "../../styles/typography/typography";
import { Card } from "../Card";
import * as S from "./styles";
interface iListVehicle {
  type: "Moto" | "Carro";
  list: iCardType[];
}
export function ListVehicle({ type, list }: iListVehicle) {
  return (
    <S.DivStyled>
      <Typography tag="h5">{type}</Typography>
      <S.SectionVehicle>
        {list.map((e: iCardType) => (
          <Card data={e} />
        ))}
      </S.SectionVehicle>
    </S.DivStyled>
  );
}
