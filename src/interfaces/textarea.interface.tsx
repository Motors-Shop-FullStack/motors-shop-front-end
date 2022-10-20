export interface ITextArea extends React.ComponentPropsWithRef<"textarea"> {
  label?: string;
  is_comment?: boolean;
}

export interface ITextAreaStyled {
  is_comment?: boolean;
}
