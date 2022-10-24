import { iButton } from "../../interfaces/button.interface";
import * as S from "./styles";

export function Button({
  children,
  variant = "grey1",
  size = "big",
  width,
  marginButton,
  ...rest
}: iButton) {
  return (
    <S.Button
      size={size}
      width={width}
      variant={variant}
      marginButton={marginButton}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
