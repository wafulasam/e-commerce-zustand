import styled from "styled-components";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "@/sky_design_system";

interface ErrorProps {
    message: string,
    nextAction: (value:any)=> void,
}

export default function ErrorModal ({ message, nextAction }:ErrorProps){
    return (
        <ErrorStyles>
            <BsInfoCircle color="#f8ba86" fontSize={50}/>
            <p style={{fontWeight:'700'}}>Failed!</p>
            <p>{message}</p>
            <Button
                label="Got It"
                onClick={nextAction}
                width="fit-content"
            />
        </ErrorStyles>
    )
}

const ErrorStyles = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`