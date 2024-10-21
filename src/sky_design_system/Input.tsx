import React from 'react';
import styled from 'styled-components';

interface styleProps {
    width?: string;
    border?: string,
    radius?: string,
}

interface InputProps {
    type?: string,
    value: string,
    placeholder: string,
    onKeyDown?: any
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    width?: string,
    required: boolean,
    border?: string,
    radius?: string,
    min?: string
    disabled?: boolean,
}

const Input = (props:InputProps) => {
    const { type, value, onKeyDown, onChange, placeholder, width, required, border, radius, min, disabled } = props;
    return (
        <Wrapper>
            <InputStyles
            type={type ? type : 'text'}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            width={width}
            onKeyUp={onKeyDown}
            required={required}
            border={border}
            radius={radius}
            min={min}
            disabled={disabled}
        />
        </Wrapper>
    )
}

const InputStyles = styled.input<styleProps>`
    width: ${props => props.width ? props.width : '100%'};
    /* border: 1px solid #CACACA; */
    /* background-color: #f6f7f9; */
    background-color: transparent;
    color: inherit;
    border: ${props => props.border ? props.border : '1px #f0f0f0 solid'};
    padding: 12px;
    border-radius: ${props => props.radius ? props.radius : '6px'};
    outline: none;
    margin: 10px 0;
    font-size: inherit;
    font-family: inherit;
`

const Wrapper = styled.span`
    /* :focus {
        border: 2px #BF3A8C solid;
    } */

    ::placeholder {
        color: #9D9D9D;
    }
`

export default Input;