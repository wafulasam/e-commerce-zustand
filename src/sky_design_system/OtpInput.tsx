import styled from "styled-components";
import { OtpInput } from 'reactjs-otp-input';

interface OtpInputProps {
    otpValues: string,
    setOtpValues: (value:string)=> void
}

export default function OTPinput ({ otpValues, setOtpValues }: OtpInputProps){
    return (
        <OtpInputStyles>
            <OtpInput 
                value={otpValues} 
                onChange={setOtpValues} 
                numInputs={6} 
                separator={<span style={{color:'transparent'}}> --- </span>} 
                inputStyle={{
                    backgroundColor:'transparent',
                    border:'1px solid #C8C8C8',
                    padding: '12px',
                    fontFamily:'inherit',
                    borderRadius:'4px'
                }}
                focusStyle={{ 
                    outline: 'none', 
                    border: '2px solid #BF3A8C' 
                }}
            />
        </OtpInputStyles>
    )
}

const OtpInputStyles = styled.div`
    margin-top: 10px;
`