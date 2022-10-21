import styled from "styled-components";
import { BaseDivContent } from "../styles";

export const DivSucessContent = styled(BaseDivContent)`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    button {
      width: 30%;
    }
  }
`;
