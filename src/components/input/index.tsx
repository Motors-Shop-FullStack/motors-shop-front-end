import { InputStyled, LabelStyled, Div } from "./styles";
import { IInput } from "../../interfaces/input.interface";
export function Input({label,...rest}:IInput){
    return(
        <Div>
            <LabelStyled>{label}</LabelStyled>
            <InputStyled {...rest}/>
        </Div>
    )
}