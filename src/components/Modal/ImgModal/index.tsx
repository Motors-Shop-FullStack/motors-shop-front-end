import { Modal } from "..";
import * as S from "./styles";

export function ImageModal() {
  return (
    <Modal title={"Imagem do veículo"}>
      <S.FigureImg>
        <img src="#" alt="#" />
      </S.FigureImg>
    </Modal>
  );
}
