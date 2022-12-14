import styled from "styled-components";
import {
  ITextArea,
  ITextAreaStyled,
} from "../../interfaces/textarea.interface";
import { propsWidth } from "../../utils/propsWidth";

export const Div = styled.div<ITextArea>`
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: ${(props) => (props.marginDiv ? "15px auto" : 0)};
`;

export const LabelStyled = styled.label`
  font-family: "Inter", sans-serif;
  color: var(--grey2);
  font-weight: 500;
  line-height: 17px;
  font-size: 14px;
`;
export const TextAreaStyled = styled.textarea<ITextAreaStyled>`
  /* max-width: 390px; */
  width: ${(props) => propsWidth(props.width)};
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 16px;
  gap: 10px;
  border: ${(props) =>
    props.is_comment ? "none" : "1.5px solid var(--grey7)"};
  border-radius: 4px;
  overflow-y: scroll;
  resize: none;
  transition: 0.5s ease;

  ::placeholder {
    color: var(--grey3);
    font-size: 16px;
    font-weight: 400;
  }

  ${(props) =>
    !props.is_comment && ":focus {border: 1.5px solid var(--brand2)}"}

  ${(props) =>
    !props.is_comment && ":hover {background-color: var(--grey8);border: none}"}

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
