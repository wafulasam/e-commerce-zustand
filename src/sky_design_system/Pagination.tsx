import styled from "styled-components";
import { useEffect, useState } from "react";

interface paginationProps {
    items:any,
    itemsPerPage: number,
    setPaginatedItems: (value:any)=> void;
}

export default function Pagination ({ items, itemsPerPage, setPaginatedItems }:paginationProps){
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentPageNumber, setCurrentPageNumber ] = useState(1)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedItems = items?.slice(indexOfFirstItem, indexOfLastItem);
   
    const totalItems = items.length;
    const pageNumbers = [];
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(()=> {
        if(currentPage){
            setPaginatedItems(paginatedItems)
        }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPage])

    useEffect(()=> {
        setPaginatedItems(paginatedItems)
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[items])

    return (
        <PaginationStyles>
            {pageNumbers.map((number) => (
                <span 
                    key={number} 
                    className={number === currentPageNumber ? "active-page-number" : "page-number"} 
                    onClick={() => { paginate(number); setCurrentPageNumber(number)}} 
                >
                    <span>
                        {number}
                    </span>
                </span>
            ))}
        </PaginationStyles>
    )
}

const PaginationStyles = styled.div`
    margin-top: 20px;
    
    .page-number {
        cursor: pointer;
        margin-right: 5px;
    }
    .active-page-number {
        color: #BF3A8C;
        cursor: pointer;
        margin-right: 5px;
        font-weight: bold;
    }
`