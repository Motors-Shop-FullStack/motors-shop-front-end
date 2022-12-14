import { Typography } from "../../../styles/typography/typography";
import { DoubleButton } from "../../Button/DoubleButton";
import { Input } from "../../Input";
import { Textarea } from "../../Textarea";
import * as S from "./styles";
import { ModalWrapper } from "../../Modal/ModalWrapper";

export function UpdateProfileModal() {
  return (
    <ModalWrapper title={"Editar perfil"}>
      <S.DivUpdateProfileContent as="form">
        <Typography tag={"p2"} fW={500} blck>
          Infomações pessoais
        </Typography>
        <Input label={"Nome"} placeholder={"Novo nome"} marginDiv />
        <Input label={"Email"} placeholder={"email@email.com"} marginDiv />
        <Input label={"CPF"} placeholder={"000.000.000-00"} marginDiv />
        <Input label={"Celular"} placeholder={"(00) 00000-0000"} marginDiv />
        <Input
          label={"Data de Nascimento"}
          placeholder={"00/00/0000"}
          marginDiv
        />
        <Textarea
          label={"Descrição"}
          marginDiv
          placeholder={"Digitar descrição"}
        />
        <DoubleButton
          firstButtonText={"Excluir anúncio "}
          firstButtonVariant={"negative"}
          secondButtonText={"Salvar alterações"}
          secondButtonVariant={"brand1"}
          position={"flex-end"}
          firstButtonChangeWidth={126}
          secondButtonChangeWidth={193}
        />
      </S.DivUpdateProfileContent>
    </ModalWrapper>
  );
}
