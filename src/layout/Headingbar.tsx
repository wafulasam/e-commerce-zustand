import styled from "styled-components";
import { ReactNode } from "react";

interface barProps {
    title: string,
    children?: ReactNode
}

export default function Headingbar ({title, children}:barProps){
    return (
        <Styles>
            <section>
                <h2>{title}</h2>
            </section>
            <section>
                {children}
            </section>
        </Styles>
    )
}

const Styles = styled.div`
    height: 60px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    z-index: 1;
    width: calc(100% - 270px);
    top: 60px;

    @media (max-width: 768px) {
        width: calc(100% - 20px);
    }
`