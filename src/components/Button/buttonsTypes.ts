import { css } from "styled-components";
import { iButton } from "../../interfaces/button.interface";

export const buttonsTypes = ({ variant }: iButton) =>
  ({
    grey1: css`
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
    `,
    light: css`
      background-color: var(--grey10);
      color: var(--grey1);
    `,
    lightOutline: css`
      background-color: transparent;
      color: var(--grey10);
      border: 1.5px solid var(--grey10);
      :hover {
        color: var(--grey1);
        background-color: var(--grey10);
      }
    `,
    big45: css`
      background-color: transparent;
      color: var(--grey0);
      border: 1.5px solid var(--grey0);
      :hover {
        color: var(--grey10);
        background-color: var(--grey1);
      }
    `,
    outline2: css`
      background-color: transparent;
      color: var(--grey0);
      border: 1.5px solid var(--grey4);
      :hover {
        color: var(--grey10);
        background-color: var(--grey1);
      }
    `,
    outlineBrand: css`
      background-color: transparent;
      color: var(--brand1);
      border: 1.5px solid var(--brand1);
      :hover {
        background-color: var(--brand4);
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
    `,
    brandDisable: css`
      background-color: var(--brand3);
      color: var(--brand4);
    `,
    linkButton: css`
      background-color: transparent;
      color: var(--grey0);
      :hover {
        background-color: var(--grey8);
      }
    `,
  }[variant]);
