import styled from "styled-components";

export const Container = styled.main`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  position: fixed;
`;

export const ModalWrapper = styled.div`
  width: 95%;
  max-width: 347px;
  background-color: var(--whiteFixed);
  margin: 95px 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 8px;

  @media (min-width: 348px) {
    max-width: 520px;
    margin: 80px 0;
  }
`;

export const HeaderModal = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 56px;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonHeader = styled.button`
  color: var(--grey4);
  background-color: transparent;
  padding: 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivContent = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
`;
