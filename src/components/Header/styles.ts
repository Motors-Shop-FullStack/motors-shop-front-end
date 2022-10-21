import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--grey10);
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
