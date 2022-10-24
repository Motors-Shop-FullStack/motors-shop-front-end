import styled from "styled-components";
import { collorTypes } from "../../utils/collorTypes";

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--grey10);
  border-bottom: 2px solid var(--grey6);
`;

export const Burguer = styled.div`
  @media (min-width: 724px) {
    display: none;
  }
`;
export const SectionNav = styled.section`
  @media (min-width: 724px) {
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;
export const NavItens = styled.div`
  display: none;
  @media (min-width: 724px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;

export const Functionalities = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 2px solid var(--grey6);
`;

export const SectionRegister = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
`;
export const SectionUser = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 15px;
  position: relative;
  .drop-down {
    display: none;
    width: 200px;
    height: 202px;

    background: #f8f9fa;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  :hover {
    .drop-down {
      display: block;
      position: absolute;
      top: 90%;
      left: 0%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
    }
  }
`;
export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background: var(${collorTypes()});
  border-radius: 150px;
  p {
    color: var(--grey9);
  }
`;
