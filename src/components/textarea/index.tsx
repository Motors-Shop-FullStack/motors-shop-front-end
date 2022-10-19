import { TextAreaStyled, LabelStyled, Div } from "./styles";
import { ITextArea } from "../../interfaces/textarea.interface";

export function TextArea({label,...rest}:ITextArea){
    return(
        <Div>
            <LabelStyled>{label}</LabelStyled>
            <TextAreaStyled {...rest}/>
        </Div>
    )
}