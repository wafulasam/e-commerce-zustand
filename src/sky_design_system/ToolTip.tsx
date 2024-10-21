import styled from "styled-components";
import { useState } from "react";

interface tipProps {
    button: any,
    content: any,
    background?: string,
    color?: string,
    fontWeight?: string,
}

interface stylesProps {
    background?: string,
    color?: string,
    fontWeight?: string,
}

export default function ToolTip ({ button, content, background, color, fontWeight }:tipProps){
    const [ showTip, setShowTip ] = useState(false)
    return (
        <ToolTipStyles background={background} color={color} fontWeight={fontWeight}>
            <div className="tip-button" onMouseOver={()=> setShowTip(true)} onMouseOut={()=> setShowTip(false)}>
                {button}
            </div>
            {showTip &&
            <div className="tip-content">
                {content}
                <div className="arrow"></div>
            </div>
            }
        </ToolTipStyles>
    )
}

const ToolTipStyles = styled.div<stylesProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .tip-button {
        cursor: pointer;
        width: fit-content;
    }
    .tip-content {
        background-color: ${props => props.background ?  props.background : '#343a40'};
        color: ${props => props.color ? props.color : '#ffffff'};
        font-weight: ${props => props.fontWeight ?  props.fontWeight : '300'};
        font-size: 12px;
        position: absolute;
        border-radius: 4px;
        padding: 10px 20px;
        margin-top: -40px;
        border: none;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

        .arrow {
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-top: 10px solid ${props => props.background ?  props.background : '#343a40'};
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
    }
`