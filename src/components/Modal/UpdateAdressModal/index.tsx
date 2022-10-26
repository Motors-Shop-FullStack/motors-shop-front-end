import { Modal } from "..";
import { Typography } from "../../../styles/typography/typography";
import { DoubleButton } from "../../Button/DoubleButton";
import { Input } from "../../Input";

import * as S from "./styles";

export function UpdateAdressModal() {
  return (
    <Modal title={"Editar endereço"}>
      <S.DivUpdateAdressContent as="form">
        <Typography tag={"p2"} fW={500} blck>
          Infomações de endereço
        </Typography>
        <Input label={"CEP"} placeholder={"00000-000"} marginDiv />
        <S.SmallInputs>
          <Input label={"Estado"} placeholder={"São Paulo"} marginDiv />
          <Input label={"Cidade"} placeholder={"SP"} marginDiv />
        </S.SmallInputs>
        <Input label={"Rua"} placeholder={"Rua Nova"} marginDiv />
        <S.SmallInputs>
          <Input label={"Número"} placeholder={"0000"} marginDiv />
          <Input label={"Complemento"} placeholder={"0000"} marginDiv />
        </S.SmallInputs>

        <DoubleButton
          firstButtonText={"Excluir anúncio "}
          firstButtonVariant={"negative"}
          secondButtonText={"Salvar alterações"}
          secondButtonVariant={"brand1"}
          position={"flex-end"}
          firstButtonChangeWidth={30}
          secondButtonChangeWidth={45}
        />
      </S.DivUpdateAdressContent>
    </Modal>
  );
}
