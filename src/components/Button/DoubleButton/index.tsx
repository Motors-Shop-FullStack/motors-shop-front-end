import { Button } from "..";
import { iDoubleButton } from "../../../interfaces/button.interface";
import { Typography } from "../../../styles/typography/typography";
import * as S from "./styles";

export function DoubleButton({
  label,
  firstButtonVariant,
  firstButtonText,
  secondButtonVariant,
  secondButtonText,
}: iDoubleButton) {
  return (
    <S.DivButtonWrapper>
      {label ? (
        <Typography tag={"p2"} fW={500} blck>
          {label}
        </Typography>
      ) : null}

      <Button variant={firstButtonVariant}>{firstButtonText}</Button>
      <Button variant={secondButtonVariant}>{secondButtonText}</Button>
    </S.DivButtonWrapper>
  );
}
