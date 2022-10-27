import styled from "styled-components";

export const DivStyled = styled.div`
  height: 458px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 100px;

  @media (min-width: 600px) {
    margin-left: 40px;
  }
  @media (min-width: 500px) {
    margin-left: 60px;
  }
`;

export const SectionVehicle = styled.section`
  display: flex;
  overflow-x: scroll;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey3);
    border-radius: 4px;
    height: 5px;
    margin-top: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (min-width: 724px) {
    gap: 40px;
  }
`;
