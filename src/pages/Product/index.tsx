import { Header } from "../../components/Header";
import * as S from "./styles";
import carro from "../../assets/img/carro.png";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../../components/Button";
import { numberFormatter } from "../../utils/formatterNumber";
import { Footer } from "../../components/Footer";
import { splitName } from "../../utils/splitName";
import { Textarea } from "../../components/Textarea";

export function ProductPage() {
  return (
    <>
      <Header />
      <S.Main>
        <S.SectionProduct>
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
        </S.SectionProduct>

        <S.SectionImageAdvertise>
          <S.DivPictures>
            <Typography tag={"h6"} fW={600}>
              Fotos
            </Typography>
            <S.DivImgs>
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
            </S.DivImgs>
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
            <div>
              <Typography tag={"p1"} fW={400}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Typography>
            </div>
            <Button variant={"grey1"} width={206}>
              Ver todos anuncios
            </Button>
          </S.DivUser>
        </S.SectionImageAdvertise>

        <S.SectionComments>
          <S.DivComments>
            <Typography tag={"h6"} fW={400}>
              Comentários
            </Typography>

            <S.DivPost>
              <S.DivUserTitle>
                <S.DivNameComment>
                  <Typography tag={"p2"} fW={500}>
                    {splitName("Júlia Lima")}
                  </Typography>
                </S.DivNameComment>
                <Typography tag={"p2"} fW={500} blck>
                  Júlia Lima
                </Typography>
                <span className="circle"></span>
                <span>há 3 dias</span>
              </S.DivUserTitle>
              <S.Post>
                <Typography tag={"p2"} fW={400}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </S.Post>
            </S.DivPost>

            <S.DivPost>
              <S.DivUserTitle>
                <S.DivNameComment>
                  <Typography tag={"p2"} fW={500}>
                    {splitName("Júlia Lima")}
                  </Typography>
                </S.DivNameComment>
                <Typography tag={"p2"} fW={500} blck>
                  Júlia Lima
                </Typography>
                <span className="circle"></span>
                <span>há 3 dias</span>
              </S.DivUserTitle>
              <S.Post>
                <Typography tag={"p2"} fW={400}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </S.Post>
            </S.DivPost>
          </S.DivComments>

          <S.DivNewComment>
            <S.DivDiv>
              <S.DivUserNewComment>
                <Typography tag={"p2"} fW={500}>
                  {splitName("Júlia Lima")}
                </Typography>
              </S.DivUserNewComment>
              <Typography tag={"p2"} fW={500}>
                Júlia Lima
              </Typography>
            </S.DivDiv>
            <Textarea
              placeholder={
                "Carro muito confortável, foi uma ótima experiência de compra..."
              }
            />
            <Button variant={"brand1"} width={25}>
              Comentar{" "}
            </Button>
          </S.DivNewComment>
        </S.SectionComments>
      </S.Main>
      <Footer />
    </>
  );
}
