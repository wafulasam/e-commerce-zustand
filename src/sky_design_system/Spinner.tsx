import styled from 'styled-components';
import { CgSpinner } from 'react-icons/cg';

interface spinnerProps {
    color?: string;
    fontSize?: number
}

export default function Spinner({ color, fontSize }: spinnerProps) {
    return (
        <SpinnerStyles>
            <CgSpinner fontSize={fontSize ? fontSize : 20} color={color ? color : '#BF3A8C'} />
        </SpinnerStyles>
    );
}

const SpinnerStyles = styled.span`
    svg,
    img {
        animation: spin 0.5s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;