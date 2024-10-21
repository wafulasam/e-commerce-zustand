import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { Button } from "@/sky_design_system";

interface successProps {
    message: string,
    nextAction: (value:any)=> void,
}

export default function SuccessModal ({ message, nextAction }:successProps){
    return (
        <SuccessStyles>
            <CiCircleCheck color="#4BB543" fontSize={50}/>
            <p style={{fontWeight:'700'}}>Awesome!</p>
            <p>{message}</p>
            <Button
                label="Got It"
                onClick={nextAction}
                width="fit-content"
            />
        </SuccessStyles>
    )
}

const SuccessStyles = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`