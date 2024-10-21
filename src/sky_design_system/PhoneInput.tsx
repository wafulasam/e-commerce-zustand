import styled from "styled-components";
import Image from "next/image";

interface Country {
    name:string,
    code:string,
    flag:any
}

interface PhoneInputProps {
    country: Country,
    phoneNumber: string,
    setPhoneNumber: (value:string)=> void,
    width?: string,
    border?: string
}

interface stylesProps {
    width?: string,
    border?: string
}

export default function PhoneInput ({ country, phoneNumber, setPhoneNumber, border, width }:PhoneInputProps){

    const handlePhoneNumber = (event:any) => {
        const  removeLeadingZero = (str:string)=>  {
            if (str.startsWith('0')) {
                return str.substring(1);
            }
            return str;
        }
        if(event.target.value.length < 10){
            if (event.target.value.startsWith('0')) {
                return event.target.value.substring(1);
            }
            setPhoneNumber(removeLeadingZero(event.target.value))
        }
    }
    return (
        <PhoneInputStyles border={border} width={width} >
            {country&&
                <section className="phone-input-country">
                    <Image src={country.flag} alt="flag"/> <span>{country.code}</span>
                </section>
            }
            <input 
                type="number" 
                value={phoneNumber}
                placeholder="7XX XXXXXX"
                onChange={handlePhoneNumber}
                className="phone-input-input"
            />
        </PhoneInputStyles>
    )
}

const PhoneInputStyles = styled.div<stylesProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    padding: 12px 10px;
    border: ${props => props.border ?  props.border : '1px solid #C8C8C8'};
    border-radius: 4px;
    margin: 10px 0;
    width: ${props => props.width ? props.width : ''};

    .phone-input-country {
        img, svg {
            vertical-align: middle;
            margin-right: 5px;
            height: 24px;
            width: 24px;
        }
    }

    .phone-input-input {
        border: none;
        outline: none;
        background-color: transparent;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        margin-top: -3px;
    }
    ::placeholder {
        color: #999;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`