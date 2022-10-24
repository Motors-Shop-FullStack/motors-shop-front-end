import styled, { css } from "styled-components";
import { iTypoStyledProps } from "../../interfaces/typography.interface";

export const H1 = styled.h1`
  font-size: 44px;
  line-height: 56px;
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-size: 36px;
  line-height: 45px;
  font-weight: 600;
`;
export const H3 = styled.h3<iTypoStyledProps>`
  font-size: 32px;
  line-height: 40px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 500)};
`;

export const H4 = styled.h4<iTypoStyledProps>`
  font-size: 28px;
  line-height: 35px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 500)};
`;
export const H5 = styled.h5<iTypoStyledProps>`
  font-size: 24px;
  line-height: 30px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 500)};
`;
export const H6 = styled.h6<iTypoStyledProps>`
  font-size: 20px;
  line-height: 25px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 500)};
`;

export const H7 = styled.h6<iTypoStyledProps>`
  font-size: 16px;
  line-height: 20px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 500)};
`;

export const P1 = styled.p<iTypoStyledProps>`
  font-size: 16px;
  line-height: 28px;
  font-weight: ${(props) => (props.fW == 600 ? 600 : 400)};
`;

export const P2 = styled.p<iTypoStyledProps>`
  font-size: 14px;
  line-height: 24px;
  font-weight: ${(props) => (props.fW == 500 ? 500 : 400)};
  color: ${(props) => (props.blck ? css`var(--black)` : css`var(--grey2)`)};
`;
