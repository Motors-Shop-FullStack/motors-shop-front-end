import styled from "styled-components"

export const Div = styled.div`
    height:84px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`

export const LabelStyled = styled.label`
    font-family: 'Inter', sans-serif;
    color: var(--grey2);
    font-weight:500;
    line-height:17px;
    font-size:14px;
`

export const InputStyled = styled.input`
    width:90%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 0px 16px;
    gap: 10px;
    border: 1.5px solid var(--grey7);
    border-radius:4px;

    transition: 0.5s ease;

    ::placeholder{
        color: var(--grey3);
        font-size:16px;
        font-weight:400;
    }
    :focus{
        border: 1.5px solid var(--brand2);
    }
    :hover{
        background-color:var(--grey8);
        border:none;
    }
;
`

