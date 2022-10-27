import { Header } from "../../components/Header";
import * as S from "./styles";
import carro from "../../assets/img/carro.png";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../../components/Button";
import { numberFormatter } from "../../utils/formatterNumber";
import { splitName } from "../../utils/splitName";

export function ProductPage() {
  return (
    <>
      <Header />
      <S.Main>
        <S.DivProduct>
          <S.DivImg>
            <figure>
              <img src={carro} alt="#" />
            </figure>
          </S.DivImg>
          <S.DivInfos>
            <Typography tag={"h6"} fW={600}>
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
            </Typography>
            <S.DivButtons>
              <Button variant={"brandOpacity"} width={45} size={"medium"}>
                2013
              </Button>
              <Button variant={"brandOpacity"} width={45} size={"medium"}>
                0
              </Button>
              <Typography tag={"h7"} fW={500}>
                {numberFormatter(1000)}
              </Typography>
            </S.DivButtons>
            <Button variant={"brand1"} width={45} changeWidth={20}>
              Comprar
            </Button>
          </S.DivInfos>
          <S.DivDescription>
            <Typography tag={"h6"} fW={600}>
              Descrição
            </Typography>
            <Typography tag={"p1"} fW={400}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </S.DivDescription>
        </S.DivProduct>
        <S.DivImgAndUser>
          <S.DivPictures>
            <Typography tag={"h6"} fW={600}>
              Fotos
            </Typography>
            <figure>
              <img src={carro} alt="#" />
            </figure>
            <figure>
              <img src={carro} alt="#" />
            </figure>
            <figure>
              <img src={carro} alt="#" />
            </figure>
            <figure>
              <img src={carro} alt="#" />
            </figure>
            <figure>
              <img src={carro} alt="#" />
            </figure>
            <figure>
              <img src={carro} alt="#" />
            </figure>
          </S.DivPictures>

          <S.DivUser>
            <S.DivName>
              <Typography tag={"p2"} fW={500}>
                {splitName("Kenzinho Aluno")}
              </Typography>
            </S.DivName>
            <Typography tag={"h6"} fW={600}>
              Kenzinho Aluno
            </Typography>
            <S.DivDescriptionUser>
              <Typography tag={"p1"} fW={400}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Typography>
            </S.DivDescriptionUser>
            <Button variant={"grey1"} width={206}>
              Ver todos anuncios
            </Button>
          </S.DivUser>
        </S.DivImgAndUser>
      </S.Main>
    </>
  );
}
