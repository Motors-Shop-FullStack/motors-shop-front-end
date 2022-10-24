import styled from "styled-components";
import { BaseDivContent, BaseDivInputs } from "../styles";

export const DivCreateAdContent = styled(BaseDivContent)`
  margin: 20px auto;
`;

export const DivInputs = styled(BaseDivInputs)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .firstInput,
  .secondInput {
    width: 45%;
    input {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .firstInput,
    .secondInput,
    .thirdInput {
      width: 31%;
      input {
        width: 100%;
      }
    }
  }
`;
