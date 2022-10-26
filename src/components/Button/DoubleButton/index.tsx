import { Button } from "..";
import { iDoubleButton } from "../../../interfaces/button.interface";
import { Typography } from "../../../styles/typography/typography";
import * as S from "./styles";

export function DoubleButton({
  label,
  width = 48,
  firstButtonVariant,
  firstButtonText,
  secondButtonVariant,
  secondButtonText,
  firstButtonChangeWidth,
  secondButtonChangeWidth,
  position = "space-between",
}: iDoubleButton) {
  return (
    <S.DivButtonWrapper position={position}>
      {label ? (
        <Typography tag={"p2"} fW={500} blck>
          {label}
        </Typography>
      ) : null}
      <Button
        variant={firstButtonVariant}
        changeWidth={firstButtonChangeWidth}
        width={width}
      >
        {firstButtonText}
      </Button>
      <Button
        variant={secondButtonVariant}
        changeWidth={secondButtonChangeWidth}
        width={width}
      >
        {secondButtonText}
      </Button>
    </S.DivButtonWrapper>
  );
}
