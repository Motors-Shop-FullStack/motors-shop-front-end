import { iCard } from "../../interfaces/card.interface";
import * as Component from "./styles";
import * as Font from "../../styles/typography/styles";
import { numberFormatter } from "./formatterNumber";

export function Card({ data }: ) {
  return (
    <Component.Container>
      <Component.DivImage>
        {user.advertiser?
          <Component.Image background={data.image}></Component.Image>
          :
          <Component.Image background={data.image}></Component.Image>
        }
        
      </Component.DivImage>
      <Component.DivTitle>
        <Font.H7 fW={600}>{data.title}</Font.H7>
      </Component.DivTitle>
      <Component.DivDescription>
        <Font.P2 fW={400}>{data.description}</Font.P2>
      </Component.DivDescription>
      <Component.DivAnnouncing>
        <Component.InitialsAnnoucing>
          <Font.P2 fW={500}>
            {data.announcing.split(" ")[0].split("")[0]}
            {data.announcing.split(" ")[1].split("")[0]}
          </Font.P2>
        </Component.InitialsAnnoucing>
        <Font.P2 fW={500}>{data.announcing}</Font.P2>
      </Component.DivAnnouncing>
      <Component.DivKMPrice>
        <Component.DivKM>
          <Component.KM>
            <Font.P2 fW={500}>{data.km}</Font.P2>
          </Component.KM>
          <Component.KM>
            <Font.P2 fW={500}>{data.year}</Font.P2>
          </Component.KM>
        </Component.DivKM>
        <Font.H7 fW={500}>{numberFormatter(data.price)}</Font.H7>
      </Component.DivKMPrice>
    </Component.Container>
  );
}
