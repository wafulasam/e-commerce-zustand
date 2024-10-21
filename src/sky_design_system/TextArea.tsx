import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
    type?: string,
    value: string,
    placeholder: string,
    onKeyDown?: any
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    width?: string,
    height?: string,
    required: boolean
}

interface TextAreaStylesProps {
    width?: string,
    height?: string
}


const TextArea = (props:TextAreaProps) => {
    const { value, onChange, onKeyDown, placeholder, width, height, required } = props;
    return (
        <TextAreaStyles
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            width={width}
            height={height}
            onKeyUp={onKeyDown}
            required={required}
        />
    )
}

const TextAreaStyles = styled.textarea<TextAreaStylesProps>`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100px'};;
    /* background-color: #f6f7f9; */
    background-color: transparent;
    border: 1px #f0f0f0 solid;
    border-radius: 6px;
    padding: 10px;
    outline: none;
    margin: 10px 0;
    font-size: inherit;
    font-family: inherit;

    :focus {
        border: 2px #b53d89 solid;
    }
`

export default TextArea;