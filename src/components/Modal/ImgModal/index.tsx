import * as S from "./styles";
import { ModalWrapper } from "../../Modal/ModalWrapper";

export function ImageModal() {
  return (
    <ModalWrapper title={"Imagem do veículo"}>
      <S.FigureImg>
        <img src="#" alt="#" />
      </S.FigureImg>
    </ModalWrapper>
  );
}
