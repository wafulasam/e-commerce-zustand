import React from 'react';
import styled from 'styled-components';
import { StyleSheetManager } from 'styled-components';
import Image from 'next/image';

interface ButtonProps {
   type?: 'submit' | 'button' | 'reset';
   label: any;
   showIcon?: boolean;
   iconUrl?: string | any;
   background?: string;
   color?: string;
   border?: string;
   padding?: string;
   margin?: string;
   radius?: string;
   width?: string;
   disabled?: boolean;
   onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const Button = (props: ButtonProps) => {
   const {
      type,
      label,
      showIcon,
      iconUrl,
      background,
      color,
      border,
      padding,
      margin,
      radius,
      width,
      disabled,
      onClick,
   } = props;
   return (
      <StyleSheetManager shouldForwardProp={(prop) => prop == prop}>
         <Styles
            type={type}
            label={label}
            background={background}
            color={color}
            border={border}
            padding={padding}
            margin={margin}
            radius={radius}
            width={width}
            disabled={disabled}
            onClick={onClick}
      >
         {showIcon ? <Image src={iconUrl} alt="icon" height={24} width={24} /> : null}
         {label}
      </Styles>
      </StyleSheetManager>
   );
};

const Styles = styled.button<ButtonProps>`
   background: ${(props) => props.background ? props.background : '#BF3A8C'};
   color: ${(props) => props.color ? props.color : '#ffffff'};
   border: ${(props) => props.border ? props.border : '1px #BF3A8C solid'};
   padding: ${(props) => props.padding ? props.padding : '12px 20px'};
   margin: ${(props) => props.margin ? props.margin : '10px 0'};
   border-radius: ${(props) => props.radius ? props.radius : '4px'};
   width: ${(props) => props.width ? props.width : '100%'};
   font-size: inherit;
   font-family: inherit;
   /* font-weight: bold; */
   cursor: pointer;

   img,
   svg {
      margin: 0 5px;
      vertical-align: middle;
   }
   &:disabled {
      cursor: not-allowed;
      /* background: linear-gradient(0deg, rgba(154, 159, 191, 0.5), rgba(154, 159, 191, 0.5)), #FFFFFF; */
      border: none;
   }
   &:focus {
      outline: none;
      cursor: pointer;
   }
   &:hover {
      opacity: 0.9;
      /* cursor: pointer; */
   }
`;

export default Button;