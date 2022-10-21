import { iModal } from "../../interfaces/modal.interface";
import { Typography } from "../../styles/typography/typography";
import * as S from "./styles";
import { CgClose } from "react-icons/cg";

export function Modal({ children, title }: iModal) {
  return (
    <S.Container>
      <S.ModalWrapper>
        <S.HeaderModal>
          <Typography tag="h7">{title}</Typography>
          <S.ButtonHeader>
            <CgClose size={22} />
          </S.ButtonHeader>
        </S.HeaderModal>
        {children}
      </S.ModalWrapper>
    </S.Container>
  );
}
