import styled from 'styled-components';
import Spinner from './Spinner';

export default function PagePreloader (){
    return (
        <PreloaderStyles>
            <Spinner fontSize={34}/>
        </PreloaderStyles>
    )
}

const PreloaderStyles = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`