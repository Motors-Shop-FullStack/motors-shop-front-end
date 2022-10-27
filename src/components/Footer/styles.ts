import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: var(--grey0);
  width: 100%;
  height: 310px;
  p {
    color: var(--whiteFixed);
  }
  @media (min-width: 1300px) {
    padding: 0 60px;
    flex-direction: row;
    justify-content: space-between;
    height: 140px;
  }
`;

export const DivIcon = styled.div`
  width: 53px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey1);
  border-radius: 4px;
  cursor: pointer;
`;
