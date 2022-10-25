import { useState } from "react";
import { Modal } from "..";
import { Typography } from "../../../styles/typography/typography";
import { Button } from "../../Button";
import { DoubleButton } from "../../Button/DoubleButton";
import { Input } from "../../Input";
import { Textarea } from "../../Textarea";
import * as S from "./styles";

export function UpdateAdModal() {
  const [imgField, setImageField] = useState(1);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <Modal title={"Editar anúncio"}>
      <S.DivUpdateAdContent as="form" onSubmit={(event) => handleSubmit(event)}>
        <DoubleButton
          label={"Tipo de anuncio"}
          firstButtonText={"Venda"}
          firstButtonVariant={"brand1"}
          secondButtonText={"Leilão"}
          secondButtonVariant={"big45"}
        />
        <Typography tag={"p2"} fW={500} blck>
          Infomações do veículo
        </Typography>
        <Input
          label={"Título"}
          placeholder={
            "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
          }
          marginDiv
        />
        <S.DivInputs>
          <Input label={"Ano"} className={"firstInput"} placeholder={"2018"} />
          <Input
            label={"Quilometragem"}
            className={"secondInput"}
            placeholder={"0"}
          />
          <Input
            label={"Preço"}
            className={"thirdInput"}
            placeholder={"50.000,00"}
          />
        </S.DivInputs>
        <Textarea
          label={"Descrição"}
          marginDiv
          placeholder={"Digitar descrição"}
        />
        <DoubleButton
          label={"Tipo de veículo"}
          firstButtonText={"Carro"}
          firstButtonVariant={"brand1"}
          secondButtonText={"Moto"}
          secondButtonVariant={"big45"}
        />
        <DoubleButton
          label={"Publicado"}
          firstButtonText={"Sim"}
          firstButtonVariant={"big45"}
          secondButtonText={"Não"}
          secondButtonVariant={"brand1"}
        />
        <Input
          label={"Imagem da capa"}
          placeholder={"https://image.com"}
          marginDiv
        />
        <Input
          label={"1° Imagem da galeria"}
          placeholder={"https://image.com"}
          marginDiv
        />
        <Input
          label={"2° Imagem da galeria"}
          placeholder={"https://image.com"}
          marginDiv
        />
        <Button
          variant={"brandOpacity"}
          marginButton={"15px 0 30px 0"}
          onClick={() => setImageField(imgField + 1)}
        >
          Adicionar campo para imagem da galeria
        </Button>

        <DoubleButton
          firstButtonText={"Excluir anúncio "}
          firstButtonVariant={"negative"}
          secondButtonText={"Salvar alterações"}
          secondButtonVariant={"brandDisable"}
        />
      </S.DivUpdateAdContent>
    </Modal>
  );
}
