import { iButton } from "../../interfaces/button.interface";
import * as S from "./styles";

export function Button({
  children,
  variant = "grey0",
  size = "big",
  width = 50,
}: iButton) {
  return (
    <S.Div>
      <S.Button size={size} width={width} variant={variant}>
        {children}
      </S.Button>
    </S.Div>
  );
}
