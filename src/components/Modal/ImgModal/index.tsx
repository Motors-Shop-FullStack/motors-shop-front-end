import * as S from "./styles";
import { ModalWrapper } from "../../Modal/ModalWrapper";
import { mockProductCard } from "../../../data";
import { useModal } from "../../../providers/modalProvider";

export function ImageModal() {
  const { showImg } = useModal();

  return (
    <ModalWrapper title={"Imagem do veículo"}>
      <S.FigureImg>
        <img src={showImg} alt="#" />
      </S.FigureImg>
    </ModalWrapper>
  );
}
