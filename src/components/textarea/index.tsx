import { ITextArea } from "../../interfaces/textarea.interface";
import { Div, LabelStyled, TextAreaStyled } from "./styles";

export function TextArea({ label, is_comment = false, ...rest }: ITextArea) {
  return (
    <Div>
      {label && <LabelStyled>{label}</LabelStyled>}
      <TextAreaStyled is_comment={is_comment} {...rest} />
    </Div>
  );
}
