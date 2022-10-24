import styled from "styled-components";

export const NavBarModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey10);
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
`;

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 2px solid var(--grey6);
  height: 80px;
`;

export const Functionalities = styled.div`
  padding: 0 40px;
  height: 236px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 2px solid var(--grey6);
`;
