import styled from "styled-components";
import { iButton } from "../../interfaces/button.interface";
import { propsWidth } from "../../utils/propsWidth";
import { buttonsTypes } from "./buttonsTypes";

export const ButtonBase = styled.button<iButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: ${(props) => props.marginButton};
  height: ${(props) => (props.size == "medium" ? "38px" : "48px")};
  width: ${(props) => propsWidth(props.width)};

  @media (min-width: 768px) {
    width: ${(props) =>
      props.changeWidth
        ? propsWidth(props.changeWidth)
        : propsWidth(props.width)};
  }
`;

export const Button = styled(ButtonBase)<iButton>`
  ${({ variant }) => buttonsTypes({ variant })}
`;
