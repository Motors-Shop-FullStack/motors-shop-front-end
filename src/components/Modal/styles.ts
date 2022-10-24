import styled from "styled-components";

export const Container = styled.main`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  /* position: fixed; */
`;

export const ModalWrapper = styled.div`
  width: 90%;
  max-width: 347px;
  background-color: var(--whiteFixed);
  margin: 95px 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 8px;

  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    width: 88%;
  }
`;

export const ButtonHeader = styled.button`
  color: var(--grey4);
  background-color: transparent;
`;

export const BaseDivContent = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 88%;
  }
`;

export const BaseDivInputs = styled.div``;
