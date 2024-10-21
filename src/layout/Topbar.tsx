import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Logo } from "@/assets";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

interface TopbarProps {
    toggleSideBar: boolean
    setToggleSideBar: (value:boolean) => void
}


export default function Topbar ({ toggleSideBar, setToggleSideBar }:TopbarProps){
    const [ showDrop, setShowDrop ] = useState(false);

    // Handle click outside to hide drop
    const divRef = useRef<any>(null);
    const handleClickOutside = (event:any) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setShowDrop(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // End Handle click outside to hide drop

    return (
        <TopbarStyles>
            <section style={{display:'flex', alignItems:'center', gap:'10px'}}> 
                {!toggleSideBar && <AiOutlineMenu fontSize={24} className="mobile-menu" onClick={()=> setToggleSideBar(true)}/>}
                {toggleSideBar && <FaAnglesLeft fontSize={24} className="mobile-menu" onClick={()=> setToggleSideBar(false)}/>}
                <Image src={Logo} alt="logo" height={35} priority/> <b>BES BEAUTY</b>
            </section>
            <section className="topbar-section-two">
                <div>
                    <span className="topbar-name"><b>Samuel</b></span> 
                    {showDrop ? 
                        <FaChevronUp onClick={()=> setShowDrop(!showDrop)}/> : 
                        <FaChevronDown onClick={()=> setShowDrop(!showDrop)}/> 
                    }
                </div>
            </section>

            {/* drop down */}
            {showDrop&&
                <div className="accounts-drop" ref={divRef}>
                    <div className="accounts-drop-list">
                        logout
                    </div>
                </div>
            }
        </TopbarStyles>
    )
}

const TopbarStyles = styled.div`
    background: linear-gradient(82.74deg, #6b2ea1 7.22%, #f14281 67.79%);
    color: #ffffff;
    padding: 0 20px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .topbar-section-two {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       gap: 20px;
       align-items: center;

       .need-help {
            background-color: #ffffff;
            color: #717171;
            border-radius: 50px;
            padding: 5px 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            font-weight: 500;
            cursor: pointer;
            font-size: 12px;

            @media (max-width: 768px) {
                display: none;
            }
       }

       .need-help-drop {
            background-color: white;
            position: absolute;
            margin-top: 10px;
            height: fit-content;
            padding: 0 10px;
            border-radius: 6px;
            color: #4D4D4D;

            .need-help-link {
                cursor: pointer;
                margin: 20px 5px;
            }
       }

       img, svg {
            cursor: pointer;
            vertical-align: middle;
            margin-left: 5px;
       }

       .topbar-account {
            text-transform: capitalize;
            margin-right: 10px;
            font-size: 12px;
       }
       .topbar-name {
            margin-right: 10px;
       }

       @media (max-width: 768px) {
            .topbar-name {
                display: none;
            }
            .topbar-account {
                display: none;
            }
        }
    }

    .accounts-drop {
        background-color: #ffffff;
        color: #4D4D4D;
        position: absolute;
        top: 60px;
        right: 20px;
        padding: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        .accounts-drop-list {
            padding: 10px;
            cursor: pointer;

            svg {
                margin-right: 5px;
                vertical-align: middle;
            }
        }
    }

    .mobile-menu {
        display: none;

        @media (max-width: 768px) {
            display: inline;
            /* margin-right: 20px; */
            cursor: pointer;
        }
    }
`