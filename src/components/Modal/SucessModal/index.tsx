import { Typography } from "../../../styles/typography/typography";
import { Button } from "../../Button";
import * as S from "./styles";
import { ModalWrapper } from "../../Modal/ModalWrapper";

export function SucessModal() {
  return (
    <ModalWrapper title={"Sucesso!"}>
      <S.DivSucessContent>
        <Typography tag={"h7"}>Sua conta foi criada com sucesso!</Typography>
        <Typography tag={"p1"}>
          Agora você poderá ver seus negócios crescendo em grande escala
        </Typography>
        <Button variant={"brand1"} size="medium" width={45}>
          Ir para o login
        </Button>
      </S.DivSucessContent>
    </ModalWrapper>
  );
}
