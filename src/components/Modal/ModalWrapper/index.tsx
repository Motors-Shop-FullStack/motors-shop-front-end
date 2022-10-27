import { iModal } from "../../../interfaces/modal.interface";
import { useModal } from "../../../providers/modalProvider";
import { Typography } from "../../../styles/typography/typography";
import * as S from "./styles";
import { CgClose } from "react-icons/cg";

export function ModalWrapper({ children, title }: iModal) {
  const {
    setCreateAdModal,
    setDeleteModal,
    setImgModal,
    setSucessModal,
    setUpdateAdModal,
    setUpdateAdressModal,
    setUpdateProfileModal,
  } = useModal();

  const closeModal = () => {
    setCreateAdModal(false);
    setDeleteModal(false);
    setImgModal(false);
    setSucessModal(false);
    setUpdateAdModal(false);
    setUpdateAdressModal(false);
    setUpdateProfileModal(false);
  };

  return (
    <S.Container>
      <S.ModalWrapper>
        <S.HeaderModal>
          <Typography tag="h7">{title}</Typography>
          <S.ButtonHeader onClick={() => closeModal()}>
            <CgClose size={22} />
          </S.ButtonHeader>
        </S.HeaderModal>
        {children}
      </S.ModalWrapper>
    </S.Container>
  );
}
