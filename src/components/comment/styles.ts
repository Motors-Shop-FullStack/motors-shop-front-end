import styled from "styled-components";

export const DivStyled = styled.div`
  max-width: 284px;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: space-evenly;

  @media (min-width: 724px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 672px;
    height: 128px;
    border: 1.5px solid var(--grey7);
    padding: 20px;
  }
`;
export const SectionTextArea = styled.section`
  border: 1.5px solid var(--grey7);
  border-radius: 4px;
  @media (min-width: 724px) {
    width: 60%;
    height: 100%;
    border-color: blue;
  }
`;

export const SectionButton = styled.section``;
