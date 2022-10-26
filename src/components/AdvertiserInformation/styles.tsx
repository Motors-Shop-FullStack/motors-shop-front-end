import styled from "styled-components";
import { collorTypes } from "../../utils/collorTypes";

export const DivStyled = styled.div`
  max-width: 343px;
  width: 90%;
  height: 397px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--grey10);
  border-radius: 4px;
  padding: 40px 29px;
  gap: 10px;

  @media (min-width: 724px) {
    max-width: 1240px;
    width: 70%;
    height: 406px;
  }
`;
export const AvatarStyled = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${collorTypes()});
  p {
    color: var(--grey9);
    font-size: 36px;
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  @media (min-width: 724px) {
    width: 50%;
  }
`;
