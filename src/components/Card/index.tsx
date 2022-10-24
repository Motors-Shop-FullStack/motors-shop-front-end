import { iCard } from "../../interfaces/card.interface";
import * as Component from "./styles";
import { Typography } from "../../styles/typography/typography";
import { numberFormatter } from "../../utils/formatterNumber";
import { splitName } from "../../utils/splitName";

export function Card({ data }: iCard) {
  //provider para verificar se está logado ou não

  const logged = true;

  return (
    <Component.Container>
      <Component.DivImage>
        {logged ? (
          <>
            <Component.Image src={data.image} alt={data.title} />
            <Component.Active active={data.active}>
              <Typography tag={"p2"} fW={500}>
                {data.active ? "Ativo" : "Inativo"}
              </Typography>
            </Component.Active>
          </>
        ) : (
          <Component.Image src={data.image} alt={data.title} />
        )}
      </Component.DivImage>
      <Component.DivTitle>
        <Typography tag={"h7"} fW={600}>
          {data.title}
        </Typography>
      </Component.DivTitle>
      <Component.DivDescription>
        <Typography tag={"p2"} fW={400}>
          {data.description}
        </Typography>
      </Component.DivDescription>
      <Component.DivAnnouncing>
        <Component.InitialsAnnoucing>
          <Typography tag={"p2"} fW={500}>
            {splitName(data.advertiser)}
          </Typography>
        </Component.InitialsAnnoucing>
        <Typography tag={"p2"} fW={500}>
          {data.advertiser}
        </Typography>
      </Component.DivAnnouncing>
      <Component.DivKMPrice>
        <Component.DivKM>
          <Component.KM>
            <Typography tag={"p2"} fW={500}>
              {data.km} KM
            </Typography>
          </Component.KM>
          <Component.KM>
            <Typography tag={"p2"} fW={500}>
              {data.year}
            </Typography>
          </Component.KM>
        </Component.DivKM>
        <Typography tag={"h7"} fW={500}>
          {numberFormatter(data.price)}
        </Typography>
      </Component.DivKMPrice>
    </Component.Container>
  );
}
