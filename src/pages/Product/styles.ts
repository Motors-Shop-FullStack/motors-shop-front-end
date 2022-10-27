import styled from "styled-components";
import { collorTypes } from "../../utils/collorTypes";

export const Main = styled.main`
  background: linear-gradient(var(--brand1) 517px, var(--grey8) 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BaseDiv = styled.div`
  max-width: 351px;
  background-color: var(--grey10);
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 752px;
  }
`;

export const DivImg = styled(BaseDiv)`
  margin-top: 45px;
  height: 355px;
  display: flex;
  align-items: center;
  justify-content: center;
  figure {
    width: 90%;
    height: 253px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;

export const DivInfos = styled(BaseDiv)`
  height: 330px;
  margin-top: 15px;
  padding: 44px 28px;
`;

export const DivButtons = styled.div`
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100px;
  gap: 10px;
`;

export const DivDescription = styled(DivInfos)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DivPictures = styled(DivInfos)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  h6 {
    width: 100%;
    margin: 0 0 30px 0;
  }
  figure {
    background-color: var(--grey7);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    margin-bottom: 50px;
    img {
      width: 100%;
      height: 50px;
    }
  }
`;

export const DivUser = styled(DivInfos)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 398px;
  gap: 28px;
`;

export const DivName = styled.div`
  display: flex;
  /* margin-bottom: 28px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 77px;
  height: 77px;
  background: var(${collorTypes()});
  border-radius: 50%;
  p {
    font-size: 26.65px;
    color: var(--whiteFixed);
  }
`;

export const DivDescriptionUser = styled.div``;
