import { IComment } from "../../interfaces/comment.interface";
import { TextArea } from "../textarea";
import { DivStyled, SectionButton, SectionTextArea } from "./styles";

export function Comment({ children }: IComment) {
  return (
    <DivStyled>
      <SectionTextArea>{<TextArea is_comment />}</SectionTextArea>
      <SectionButton>{children}</SectionButton>
    </DivStyled>
  );
}
