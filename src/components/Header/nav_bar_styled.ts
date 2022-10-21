import styled from "styled-components";

export const NavBarModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey7);
  display: flex;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
`;

export const NavStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
