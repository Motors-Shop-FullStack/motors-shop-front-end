import { IComment } from "../../interfaces/comment.interface";
import { TextArea } from "../Textarea";
import { DivStyled, SectionButton, SectionTextArea } from "./styles";

export function Comment({ children }: IComment) {
  return (
    <DivStyled>
      <SectionTextArea>
        {<TextArea is_comment placeholder="Digite um comentário" />}
      </SectionTextArea>
      <SectionButton>{children}</SectionButton>
    </DivStyled>
  );
}
