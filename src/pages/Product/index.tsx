import { Header } from "../../components/Header";
import * as S from "./styles";
import carro from "../../assets/img/carro.png";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../../components/Button";
import { numberFormatter } from "../../utils/formatterNumber";
import { Footer } from "../../components/Footer";
import { splitName } from "../../utils/splitName";
import { Textarea } from "../../components/Textarea";
import { iProduct } from "../../interfaces/product";
import { useModal } from "../../providers/modalProvider";
import { Modal } from "../../components/Modal";
import { ImageModal } from "../../components/Modal/ImgModal";

export function ProductPage(product: iProduct) {
  const { imgModal, setImgModal, setShowImg } = useModal();

  const handleClickImgModal = (event: number) => {
    const img = product.product.ad.imgs[event];
    setShowImg(img);
    setImgModal(!imgModal);
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.Product>
          <S.SectionProduct>
            <S.DivImg>
              <figure>
                <img src={product.product.ad.mainImg} alt="#" />
              </figure>
            </S.DivImg>
            <S.DivInfos>
              <Typography tag={"h6"} fW={600}>
                {product.product.ad.title}
              </Typography>
              <S.DivButtons>
                <Button variant={"brandOpacity"} width={45} size={"medium"}>
                  {product.product.ad.year}
                </Button>
                <Button variant={"brandOpacity"} width={45} size={"medium"}>
                  {product.product.ad.km} KM
                </Button>
                <Typography tag={"h7"} fW={500}>
                  {numberFormatter(product.product.ad.price)}
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
                {product.product.ad.description}
              </Typography>
            </S.DivDescription>
          </S.SectionProduct>

          <S.SectionImageAdvertise>
            <S.DivPictures>
              <Typography tag={"h6"} fW={600}>
                Fotos
              </Typography>
              <S.DivImgs>
                {product.product.ad.imgs.map((img, index) => (
                  <figure
                    key={index}
                    onClick={() => handleClickImgModal(index)}
                  >
                    <img src={img} alt="#" id={index.toString()} />
                  </figure>
                ))}
              </S.DivImgs>
            </S.DivPictures>

            <S.DivUser>
              <S.DivName>
                <Typography tag={"p2"} fW={500}>
                  {splitName(product.product.user.name)}
                </Typography>
              </S.DivName>
              <Typography tag={"h6"} fW={600}>
                {product.product.user.name}
              </Typography>
              <div>
                <Typography tag={"p1"} fW={400}>
                  {product.product.user.description}
                </Typography>
              </div>
              <Button variant={"grey1"} width={206}>
                Ver todos anuncios
              </Button>
            </S.DivUser>
          </S.SectionImageAdvertise>
        </S.Product>

        <S.Comments>
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </S.Post>
              </S.DivPost>
            </S.DivComments>

            <S.DivNewComment>
              <S.DivCommentUser>
                <S.DivUserNewComment>
                  <Typography tag={"p2"} fW={500}>
                    {splitName("Júlia Lima")}
                  </Typography>
                </S.DivUserNewComment>
                <Typography tag={"p2"} fW={500}>
                  Júlia Lima
                </Typography>
              </S.DivCommentUser>
              <Textarea
                placeholder={
                  "Carro muito confortável, foi uma ótima experiência de compra..."
                }
              />
              <Button variant={"brand1"} width={25}>
                Comentar
              </Button>
            </S.DivNewComment>
          </S.SectionComments>
        </S.Comments>
      </S.Main>
      <Footer />
      <Modal />
    </>
  );
}
