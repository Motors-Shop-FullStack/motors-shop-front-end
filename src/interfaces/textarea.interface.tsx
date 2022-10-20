export interface ITextArea extends React.ComponentPropsWithRef<"textarea"> {
  label?: string;
  is_comment?: boolean;
}

export interface ITextAreaStyled {
  is_comment?: boolean;
  width?: 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 90;
}
