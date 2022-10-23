import styled from "styled-components";
import { collorTypes } from "./collorTypes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  width: 312px;
  height: 152px;
  background: var(--grey7);
  border: 2px solid var(--grey7);
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  width: 312px;
  height: 152px;
  background: var(--grey7);
  border: 2px solid var(--grey7);
`;

export const Image = styled.image`
  width: 262px;
  height: 150.28px;
  left: 25px;
  top: 1px;
  background: url(${background});
`;

export const DivTitle = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 312px;
  height: 22px;
  line-height: 20px;
  color: var(--grey1);
`;

export const DivDescription = styled.div`
  flex: none;
  order: 2;
  flex-grow: 0;
  width: 312px;
  height: 22px;
  color: var(--grey2);
  line-height: 24px;
`;

export const DivAnnouncing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 8px;
  height: 32px;
  width: 126px;
  color: var(--grey2);
`;

export const InitialsAnnoucing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background: var(--random ${collorTypes()});
  border-radius: 150px;
  color: var(--whiteFixed);
`;

export const DivKMPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 28px;
  width: 309px;
  height: 32px;
`;

export const DivKM = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 12px;
  width: 113px;
  height: 32px;
`;

export const KM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  width: 51px;
  height: 32px;
  background: var(--brand4);
  border-radius: 4px;
  color: var(--brand1);
`;
