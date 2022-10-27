import { iCard } from "../../interfaces/card.interface";
import * as S from "./styles";
import { Typography } from "../../styles/typography/typography";
import { numberFormatter } from "../../utils/formatterNumber";
import { splitName } from "../../utils/splitName";
import { Button } from "../Button";

export function Card({ data }: iCard) {
  //Verificar qual propriedade iremos utilizar do BD
  const advertiser = false;

  return (
    <S.Container>
      <S.DivImage>
        {advertiser ? (
          <S.Active active={data.active}>
            <Typography tag={"p2"} fW={500}>
              {data.active ? "Ativo" : "Inativo"}
            </Typography>
          </S.Active>
        ) : null}
        <S.Image src={data.image} alt={data.title} />
      </S.DivImage>
      <S.DivTitle>
        <Typography tag={"h7"} fW={600}>
          {data.title}
        </Typography>
      </S.DivTitle>
      <S.DivDescription>
        <Typography tag={"p2"} fW={400}>
          {data.description}
        </Typography>
      </S.DivDescription>
      {!advertiser ? (
        <S.DivAnnouncing>
          <S.InitialsAnnoucing>
            <Typography tag={"p2"} fW={500}>
              {splitName(data.advertiser)}
            </Typography>
          </S.InitialsAnnoucing>
          <Typography tag={"p2"} fW={500}>
            {data.advertiser}
          </Typography>
        </S.DivAnnouncing>
      ) : null}
      <S.DivKMPrice>
        <S.DivKM>
          <S.KM>
            <Typography tag={"p2"} fW={500}>
              {data.km} KM
            </Typography>
          </S.KM>
          <S.KM>
            <Typography tag={"p2"} fW={500}>
              {data.year}
            </Typography>
          </S.KM>
        </S.DivKM>
        <Typography tag={"h7"} fW={500}>
          {numberFormatter(data.price)}
        </Typography>
      </S.DivKMPrice>
      {advertiser ? (
        <S.DivButtons>
          <Button variant={"big45"} width={30} size={"medium"}>
            Editar
          </Button>
          <Button variant={"big45"} width={35} size={"medium"}>
            Ver como
          </Button>
        </S.DivButtons>
      ) : null}
    </S.Container>
  );
}
