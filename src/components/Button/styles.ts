import styled from "styled-components";
import { iButton } from "../../interfaces/button.interface";
import { propsWidth } from "../../utils/propsWidth";
import { buttonsTypes } from "./buttonsTypes";

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonBase = styled.button<iButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: ${(props) => (props.size == "medium" ? "38px" : "48px")};
  width: ${(props) => propsWidth(props.width)};
`;

export const Button = styled(ButtonBase)<iButton>`
  ${({ variant }) => buttonsTypes({ variant })}
`;
