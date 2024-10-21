import styled from "styled-components";
import { StyleSheetManager } from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

interface radioProps {
    label: string,
    checked: boolean,
    setChecked: (value:boolean)=> void,
    margin?: string
}

interface styleProps {
    margin?: string
}

export default function RadioCard ({ label, checked, setChecked, margin }:radioProps){
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop == prop}>
            <RadioStyles margin={margin} onClick={()=> setChecked(!checked)}>
                {checked ? 
                    <IoCheckmarkCircle  fontSize={18} color="#BF3A8C"/> : 
                    <FaRegCircle fontSize={18}/>
                }
                <span className="radio-label">{label}</span>
            </RadioStyles>
        </StyleSheetManager>
    )
}

const RadioStyles = styled.div<styleProps>`
    background-color: #F8F8F8;
    border-radius: 6px;
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    margin: ${props => props.margin ? props.margin : '10px 0'};

    .radio-label {
        /* font-weight: bold; */
    }
`