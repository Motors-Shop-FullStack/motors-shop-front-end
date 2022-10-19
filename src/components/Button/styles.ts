import styled, { css } from "styled-components";
import { iButton } from "../../interfaces/button.interface";

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const buttonStyles = ({ variant }: iButton) =>
  ({
    grey0: css`
      color: var(--whiteFixed);
      background-color: var(--grey0);
      :hover {
        background-color: var(--grey1);
      }
    `,
    negative: css`
      background-color: var(--grey6);
      color: var(--grey2);
      :hover {
        background-color: var(--grey5);
      }
    `,
    brand1: css`
      background-color: var(--brand1);
      color: var(--whiteFixed);
      :hover {
        background-color: var(--brand2);
      }
    `,
    brandOpacity: css`
      background-color: var(--brand4);
      color: var(--brand1);
      :hover {
        background-color: var(--brand4);
      }
    `,
    light: css`
      background-color: var(--grey10);
      color: var(--grey1);
      :hover {
        background-color: var(--grey10);
      }
    `,
    alert: css`
      background-color: var(--alert3);
      color: var(--alert1);
      :hover {
        background-color: var(--alert2);
      }
    `,
    sucess: css`
      background-color: var(--sucess3);
      color: var(--sucess1);
      :hover {
        background-color: var(--sucess2);
      }
    `,
    disable: css`
      background-color: var(--grey5);
      color: var(--whiteFixed);
      :hover {
        background-color: var(--grey5);
      }
    `,
    brandDisable: css`
      background-color: var(--brand3);
      color: var(--brand4);
      :hover {
        background-color: var(--brand3);
      }
    `,
    linkButton: css`
      background-color: transparent;
      color: var(--grey0);
      :hover {
        background-color: var(--grey8);
      }
    `,
  }[variant]);

export const ButtonBase = styled.button<iButton>`
  border-radius: 4px;
  height: 48px;
  height: ${(props) => (props.size == "medium" ? "38px" : "48px")};
  width: ${(props) =>
    props.width == 90
      ? "90%"
      : props.width == 75
      ? "75%"
      : props.width == 50
      ? "50%"
      : "25%"};
`;

export const Button = styled(ButtonBase)<iButton>`
  ${({ variant }) => buttonStyles({ variant })}
`;
