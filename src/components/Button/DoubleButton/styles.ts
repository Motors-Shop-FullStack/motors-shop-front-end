import styled from "styled-components";

interface iPosition {
  position?: "space-between" | "flex-end";
}

export const DivButtonWrapper = styled.div<iPosition>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 25px;
  p {
    width: 100%;
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    justify-content: ${(props) =>
      props.position == "flex-end" ? "flex-end" : "space-between"};
    gap: 10px;
  }
`;
