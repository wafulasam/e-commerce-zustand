import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";


interface checkboxProps {
    checked: boolean,
    setCheck: ()=>void,
    rightLabel?: any,
    leftLabel?: any,
}

interface stylesProps {
    checked: boolean
}

export default function Checkbox ({ checked, setCheck, rightLabel, leftLabel }:checkboxProps){
    return (
        <CheckboxStyles checked={checked}>
            {rightLabel && <label>{leftLabel}</label>}
            <div className="box" onClick={setCheck}>
                {checked && <FaCheck color="#ffffff"/>}
            </div>
            {leftLabel && <label>{rightLabel}</label>}
        </CheckboxStyles>
    )
}

const CheckboxStyles = styled.label <stylesProps>`
    display: flex;
    gap: 10px;
    align-items: center;

    .box {
        height: 20px;
        width: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${props => props.checked  ? '#BF3A8C' : 'rgb(218, 218, 218)' };
        background-color: ${props => props.checked  ? '#BF3A8C' : 'transparent' };
        cursor: pointer;
    }
`