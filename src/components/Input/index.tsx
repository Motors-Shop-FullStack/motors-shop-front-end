import { IInput } from "../../interfaces/input.interface";
import { Div, InputStyled, LabelStyled } from "./styles";

export function Input({ label, id, ...rest }: IInput) {
  return (
    <Div>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled id={id} {...rest} />
    </Div>
  );
}
