import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';

interface searchProps {
    placeholder: string,
    value: string,
    onChange: (value:any) => void,
    padding?: string,
    width?: string,
}

interface stylesProps {
    padding?: string,
    width?: string,
}

export default function Search (props: searchProps){
    const { placeholder, value, onChange, padding, width } = props;
    return (
        <SearchStyles padding={padding} width={width}>
            <BiSearch color="#BF3A8C"/>
            <input 
                type="search"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name="search"
                className='search-input'
            />
        </SearchStyles>
    )
}

const SearchStyles = styled.div<stylesProps>`
    background-color: #f4f6f9;
    border: 1px #f0f0f0 solid;
    border-radius: 4px;
    width: ${props => props.width ? props.width : '100%'};

    svg {
        margin-left: 10px;
        height: 20px;
        width: 20px;
        vertical-align: middle;
    }

    .search-input {
        border: 0;
        padding: ${props => props.padding ? props.padding : '9px 9px 9px 0'};
        flex: 1;
        background-color: transparent;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        margin-left: 10px;
        width: calc(100% - 40px)
    }
    ::placeholder {
        //
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`