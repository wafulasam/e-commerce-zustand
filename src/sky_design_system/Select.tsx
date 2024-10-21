import { useState, useRef } from "react";
import styled from "styled-components";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import Spinner from "./Spinner";

interface stylesProps {
    radius?: string
    width?: string,
    padding?: string,
}

interface SelectProps {
    items:any,
    selectedItem: any,
    setSelectedItem: (value:any)=> void;
    radius?: string,
    width?: string,
    padding?: string,
    loading?: boolean,
    error?:any
}

export default function Select ({ items, selectedItem, setSelectedItem, radius, padding, width, loading, error }:SelectProps){
    const [ open, setOpen ] = useState(false);
    const collapsibleRef = useRef<any>(null);

    // Handle click outside the collapsible component
    // const handleClickOutside = (event:any) => {
    //     if (collapsibleRef.current && !collapsibleRef.current.contains(event.target)) {
    //         setOpen(false);
    //     }
    // };
    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    // auto select a default country
    // useEffect(()=> {
    //     setSelectedItem(items[0]);
    // },[setSelectedItem])

    return (
        <SelectCountryStyles ref={collapsibleRef} radius={radius} width={width} padding={padding}>
            <div className="select-button" onClick={()=>setOpen(!open)}>
                <div>
                    {selectedItem ? selectedItem : error ? 'error' : 'Select'}
                </div>
                <div>
                    {open ? <RxCaretUp fontSize={24} color="#ADADAD"/> :<RxCaretDown fontSize={24} color="#ADADAD"/>}
                    {loading && <Spinner/>}
                </div>
            </div>
            {open&&
                <div className="select-list">
                    {items.filter((item:any)=> item?.name != selectedItem).map((item:any) => (
                        <section className="select-list-item" key={items.indexOf(item)} onClick={()=>{setSelectedItem(item), setOpen(!open)}}>
                            {item.name}
                        </section>
                    ))}
                </div>
            }
        </SelectCountryStyles>
    )
}

const SelectCountryStyles = styled.div<stylesProps>`
    margin: 10px 0;
    cursor: pointer;
    /* position: relative; */

    .select-button {
        border: 1px #f0f0f0 solid;
        padding: ${props => (props.padding ? props.padding : '8px 0px 8px 8px')} ;
        border-radius: ${props => (props.radius ? props.radius : '6px')};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: ${props => props.width ? props.width : 'fit-content'};

        img, svg {
            vertical-align: middle;
            margin: 0 5px;
            height: 24px;
            width: 24px;
        }
    }

    .select-list {
        position: absolute;
        color: inherit;
        background-color: #F4F5F7;
        border-radius: 6px;
        margin-top: 5px;
        width: ${props => props.width ? props.width : '100%'};
        position: absolute;
        border: 1px solid #C8C8C8;
        z-index: 1;
        min-height: fit-content;
        max-height: 200px;
        overflow-y: scroll;

        .select-list-item {
            padding: 10px;

            img, svg {
                vertical-align: middle;
                margin-right: 10px;
                height: 24px;
                width: 24px;
            }
        }
        :hover {
            background-color: #F9E6EC;
            border-radius: 6px;
        }
    }
`