import { iCardType } from "../../interfaces/card.interface";
import { iListVehicle } from "../../interfaces/vehicle_view.interface";
import { Typography } from "../../styles/typography/typography";
import { Card } from "../Card";
import * as S from "./styles";

export function ListVehicle({ type, list }: iListVehicle) {
  return (
    <S.DivStyled>
      <Typography tag="h5">{type}</Typography>
      <S.SectionVehicle>
        {list.map((e: iCardType) => (
          <Card data={e} key={e.id} />
        ))}
      </S.SectionVehicle>
    </S.DivStyled>
  );
}
