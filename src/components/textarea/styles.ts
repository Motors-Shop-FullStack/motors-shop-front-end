import styled from "styled-components";
import { ITextAreaStyled } from "../../interfaces/textarea.interface";

export const Div = styled.div`
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LabelStyled = styled.label`
  font-family: "Inter", sans-serif;
  color: var(--grey2);
  font-weight: 500;
  line-height: 17px;
  font-size: 14px;
`;
export const TextAreaStyled = styled.textarea<ITextAreaStyled>`
  width: 90%;
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
