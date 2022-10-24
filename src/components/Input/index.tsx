import { iInput } from "../../interfaces/input.interface";
import { DivStyled, InputStyled, LabelStyled } from "./styles";

export function Input({ label, id, marginDiv = false, ...rest }: iInput) {
  return (
    <DivStyled {...rest} marginDiv={marginDiv}>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled id={id} {...rest} />
    </DivStyled>
  );
}
