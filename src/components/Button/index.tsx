import { iButton } from "../../interfaces/button.interface";
import * as S from "./styles";

export function Button({
  children,
  variant = "grey1",
  size = "big",
  width,
  ...rest
}: iButton) {
  return (
    <S.Button size={size} width={width} variant={variant} {...rest}>
      {children}
    </S.Button>
  );
}
