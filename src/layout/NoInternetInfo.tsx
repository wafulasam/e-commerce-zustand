import styled from 'styled-components';
import { MdSignalWifiStatusbarConnectedNoInternet2 } from "react-icons/md";

export default function NoInternetInfo (){
    return (
        <Styles>
            <MdSignalWifiStatusbarConnectedNoInternet2 fontSize={24} color='red'/>
            <span>No Internet Connection</span>
        </Styles>
    );
}

const Styles = styled.div`
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    position: fixed;
    top: 20px;
    left: 40%;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1000px) {
        left: 15%;
    }
`;
