import { Typography } from "../../../styles/typography/typography";
import { Button } from "../../Button";
import { DoubleButton } from "../../Button/DoubleButton";
import { Input } from "../../Input";
import { Textarea } from "../../Textarea";
import * as S from "./styles";

export function UpdateAdModal() {
  return (
    <S.DivUpdateAdContent>
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
      <Input label={"Título"} />
      <Input label={"Ano"} />
      <Input label={"Quilometragem"} />
      <Input label={"Preço"} />
      <Textarea label={"Descrição"} />
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
      <Input label={"Imagem da capa"} />
      <Input label={"1° Imagem da galeria"} />
      <Input label={"2° Imagem da galeria"} />
      <Button variant={"brandOpacity"}>
        Adicionar campo para imagem da galeria
      </Button>

      <DoubleButton
        firstButtonText={"Excluir anúncio "}
        firstButtonVariant={"negative"}
        secondButtonText={"Salvar alterações"}
        secondButtonVariant={"brandDisable"}
      />
    </S.DivUpdateAdContent>
  );
}
