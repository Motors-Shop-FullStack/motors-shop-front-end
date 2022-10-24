import styled, { css } from "styled-components";
import { collorTypes } from "../../utils/collorTypes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 312px;
  height: 350px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const DivImage = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  width: 312px;
  height: 152px;
  background: var(--grey7);
  border: 2px solid var(--grey7);
`;

interface iActive {
  active: boolean;
}
export const Active = styled.div<iActive>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 51px;
  height: 24px;
  left: 16px;
  top: 11px;
  position: absolute;
  z-index: 1;
  line-height: 24px;
  background: ${(props) =>
    props.active ? css`var(--brand1)` : css`var(--grey4)`};
  p {
    color: var(--whiteFixed);
  }
`;

export const Image = styled.img`
  width: 90%;
  top: 1px;
  position: relative;
  :hover {
    width: 100%;
  }
`;

export const DivTitle = styled.div`
  flex: none;
  flex-grow: 0;
  width: 312px;
  height: 22px;
  line-height: 20px;
  color: var(--grey1);
`;

export const DivDescription = styled.div`
  flex: none;
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
  padding: 0px;
  gap: 8px;
  height: 32px;
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
  background: var(${collorTypes()});
  border-radius: 150px;
  p {
    color: var(--whiteFixed);
  }
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
  width: 120px;
  height: 32px;
`;

export const KM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  width: 60px;
  height: 32px;
  background: var(--brand4);
  border-radius: 4px;
  p {
    color: var(--brand1);
  }
`;
