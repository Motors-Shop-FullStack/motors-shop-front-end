import { Modal } from "..";
import { Typography } from "../../../styles/typography/typography";
import { DoubleButton } from "../../Button/DoubleButton";
import * as S from "./styles";

export function DeleteAdMotal() {
  return (
    <Modal title={"Excluir anúncio"}>
      <S.DivDeleteContentModal>
        <Typography tag={"h7"}>
          Tem certeza que deseja remover este anúncio?
        </Typography>
        <Typography tag={"p1"}>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </Typography>
        <DoubleButton
          firstButtonText={"Cancelar"}
          firstButtonVariant={"negative"}
          secondButtonText={"Sim, excluir anúncio"}
          secondButtonVariant={"alert"}
          position={"flex-end"}
          firstButtonChangeWidth={25}
          secondButtonChangeWidth={40}
        />
      </S.DivDeleteContentModal>
    </Modal>
  );
}
