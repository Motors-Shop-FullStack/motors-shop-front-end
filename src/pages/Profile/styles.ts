import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: var(--grey8);
`;
export const SectionInformationStyled = styled.section`
  height: 277px;
  position: relative;
  background-color: var(--brand1);
  margin-bottom: 270px;
  display: flex;
  justify-content: center;

  @media (min-width: 724px) {
    margin-bottom: 210px;
  }
  .informations {
    width: 100%;
    position: absolute;
    top: 40%;
    margin: 0 auto;
  }
`;
