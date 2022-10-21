import { IComment } from "../../interfaces/comment.interface";
import { Textarea } from "../Textarea";
import { DivStyled, SectionButton, SectionTextArea } from "./styles";

export function Comment({ children }: IComment) {
  return (
    <DivStyled>
      <SectionTextArea>
        {<Textarea is_comment placeholder="Digite um comentário" />}
      </SectionTextArea>
      <SectionButton>{children}</SectionButton>
    </DivStyled>
  );
}
