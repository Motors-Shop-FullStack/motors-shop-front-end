import { iModal } from "../../interfaces/modal.interface";
import { useModal } from "../../providers/modalProvider";
import { Typography } from "../../styles/typography/typography";
import * as S from "./styles";
import { CgClose } from "react-icons/cg";
import { CreateAdModal } from "./CreateAdModal";
import { DeleteAdMotal } from "./DeleteAdMotal";
import { ImageModal } from "./ImgModal";
import { SucessModal } from "./SucessModal";
import { UpdateAdModal } from "./UpdateAdModal";
import { UpdateAdressModal } from "./UpdateAdressModal";
import { UpdateProfileModal } from "./UpdateProfileModal";

export function Modal() {
  const {
    createAdModal,
    deleteModal,
    imgModal,
    sucessModal,
    updateAdModal,
    updateAdressModal,
    updateProfileModal,
  } = useModal();

  return (
    <>
      {createAdModal ? (
        <CreateAdModal />
      ) : deleteModal ? (
        <DeleteAdMotal />
      ) : imgModal ? (
        <ImageModal />
      ) : sucessModal ? (
        <SucessModal />
      ) : updateAdModal ? (
        <UpdateAdModal />
      ) : updateAdressModal ? (
        <UpdateAdressModal />
      ) : updateProfileModal ? (
        <UpdateProfileModal />
      ) : null}
    </>
  );
}
