import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsShop } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";

export default function Sidebar (){
    const router = useRouter()
    const { active } = router.query;
    const getActiveValue = (url:string) => (url.replace('/dashboard?active=', '')) 
    const isActive = (path:string) => getActiveValue(path) === active;

    return (
        <SidebarStyles>
            <div className="sidebar-shop-name">
                <p>Bungoma Branch</p>
            </div>
            <div className="sidebar-links">
                    <Link href="/dashboard?active=shop" className={(isActive("/dashboard?active=shop")) ? "sidebar-link-active " : "sidebar-link"}>
                        <section className="sidebar-icon-holder">
                            <BsShop/>
                        </section>
                        <section>
                            <span>Shop</span>
                        </section>
                    </Link>
                    <Link href="/dashboard?active=orders" className={(isActive("/dashboard?active=orders")) ? "sidebar-link-active " : "sidebar-link"}>
                        <section className="sidebar-icon-holder">
                            <BsCart3/>
                        </section>
                        <section>
                            <span>Orders</span>
                        </section>
                    </Link>
                    <Link href="/dashboard?active=inventory" className={(isActive("/dashboard?active=inventory")) ? "sidebar-link-active " : "sidebar-link"}>
                        <section className="sidebar-icon-holder">
                            <CiBoxes/>
                        </section>
                        <section>
                            <span>Inventory</span>
                        </section>
                    </Link>
                    <Link href="/dashboard?active=insights" className={(isActive("/dashboard?active=insights")) ? "sidebar-link-active " : "sidebar-link"}>
                        <section className="sidebar-icon-holder">
                            <IoAnalytics/>
                        </section>
                        <section>
                            <span>Insights</span>
                        </section>
                    </Link>
            </div>
        </SidebarStyles>
    )
}

const SidebarStyles = styled.div`
    background-color: #2A2A2A;
    color: #EDEDED;
    height: 100vh;
    overflow-y: scroll;
    padding: 10% 10%;

    .sidebar-shop-name {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #9D9D9D;
        font-weight: bold;
    }

    .sidebar-links {
        margin-top: 40px;

        .sidebar-link {
            color: #EDEDED;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            cursor: pointer;
            text-decoration: none;

            .sidebar-icon-holder {
                background-color: #373737;
                border-radius: 6px;
                padding: 7px 7px 4px 7px;

                svg {
                    color: #ffffff;
                    /* font-size: 20px; */
                }
            }
        }

        .sidebar-link-active {
            color: #BF3A8C;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;

            .sidebar-icon-holder {
                background-color: #BF3A8C;
                border-radius: 6px;
                padding: 7px 7px 4px 7px;

                svg {
                    color: #ffffff;
                    /* font-size: 20px; */
                }
            }
        }
    }
`