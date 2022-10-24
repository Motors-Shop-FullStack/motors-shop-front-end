import { iWidthProps } from "./types";

export interface ITextArea extends React.ComponentPropsWithRef<"textarea"> {
  label?: string;
  is_comment?: boolean;
  marginDiv?: boolean;
}

export interface ITextAreaStyled {
  is_comment?: boolean;
  width?: iWidthProps;
}
