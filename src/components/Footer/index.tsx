import * as S from "./styles";
import LOGOFOOTER from "../../assets/logo-footer.svg";
import { FaAngleUp } from "react-icons/fa";
import { Typography } from "../../styles/typography/typography";

export function Footer() {
  return (
    <S.Footer>
      <figure>
        <img src={LOGOFOOTER} alt="Logo Footer" />
      </figure>
      <Typography tag={"p2"} fW={400}>
        © 2022 - Todos os direitos reservados.
      </Typography>
      <S.DivIcon>
        <FaAngleUp color="#FFFFFF" size={25} />
      </S.DivIcon>
    </S.Footer>
  );
}
