import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function MobileNav (){
    return (
        <MobileNavStyles>
            <div className="mobile-nav">
                <Sidebar/>
            </div>
        </MobileNavStyles>
    )
}

const MobileNavStyles = styled.div`
    background-color: #2A2A2A;
    color: #ffffff;
    bottom: 0;
    position: fixed;
    width: 250px;
    height: calc(100% - 60px);
    margin-top: 50px;
    overflow-y: scroll;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
    
    .mobile-nav {
        margin: 20px;
    }
`