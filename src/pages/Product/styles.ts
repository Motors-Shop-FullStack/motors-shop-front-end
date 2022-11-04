import styled from "styled-components";
import { collorTypes } from "../../utils/collorTypes";

export const Main = styled.main`
  background: linear-gradient(var(--brand1) 517px, var(--grey8) 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 45px;

  @media (min-width: 768px) {
    gap: 15px;
  }

  @media (min-width: 1300px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 25px;
    flex-wrap: wrap;
  }
`;

export const BaseDiv = styled.div`
  width: 351px;
  background-color: var(--grey10);
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 752px;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1300px) {
    flex-direction: row;
    gap: 45px;
  }
`;

export const Comments = styled.div`
  @media (min-width: 1300px) {
    width: 1237px;
    display: flex;
  }
`;

export const BaseWrapper = styled(BaseDiv)`
  padding: 44px 28px;

  @media (min-width: 768px) {
    padding: 44px 36px;
  }
`;

export const SectionProduct = styled.section``;

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

export const DivInfos = styled(BaseWrapper)`
  margin-top: 15px;
`;

export const DivButtons = styled.div`
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100px;
  gap: 10px;

  @media (min-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    height: 55px;
    button {
      width: 25%;
    }
    h6 {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

export const DivDescription = styled(BaseWrapper)`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SectionImageAdvertise = styled.section`
  width: 351px;

  @media (min-width: 768px) {
    width: 752px;
  }

  @media (min-width: 1300px) {
    width: 440px;
  }
`;

export const DivPictures = styled(BaseWrapper)`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  h6 {
    width: 100%;
  }
  figure {
    background-color: var(--grey7);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;

    img {
      width: 100%;
      height: 50px;
    }
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1300px) {
    margin-top: 45px;
  }
`;

export const DivImgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  flex-grow: 1;
  figure {
    cursor: pointer;
  }
`;

export const DivUser = styled(BaseWrapper)`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const DivName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 77px;
  background: var(${collorTypes()});
  border-radius: 50%;
  p {
    font-size: 26.65px;
    color: var(--whiteFixed);
  }
`;

export const SectionComments = styled.section`
  width: 351px;

  @media (min-width: 768px) {
    width: 751px;
  }
`;

export const DivUserTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-family: "Inter";
    color: var(--grey3);
  }
  .circle {
    width: 5px;
    height: 5px;
    background: var(--grey3);
    border-radius: 50%;
  }
`;

export const DivComments = styled(BaseWrapper)`
  h6 {
    margin-bottom: 25px;
  }
`;

export const DivPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

export const Post = styled.div``;

export const DivNameComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background: var(${collorTypes()});
  border-radius: 50%;
  p {
    font-size: 16px;
    color: var(--whiteFixed);
  }
`;

export const DivNewComment = styled(BaseWrapper)`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DivCommentUser = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const DivUserNewComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background: var(${collorTypes()});
  border-radius: 50%;

  p {
    font-size: 16px;
    color: var(--whiteFixed);
  }
`;
