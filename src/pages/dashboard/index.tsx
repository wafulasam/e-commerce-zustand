import { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "@/app/app";
import Topbar from "@/layout/Topbar";
import Sidebar from "@/layout/Sidebar";
import MainRouter from "@/routes/MainRouter";
import MobileNav from "@/layout/MobileNav";

export default function Dashboard (){
    const [ toggleSideBar, setToggleSideBar ] = useState(false);
    return (
        <AppLayout title="BES Beauty" description="bes beauty">
             <DashboardLayoutStyles>
                <div className="dashboard-topbar">
                    <Topbar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
                </div>
                <div className="dashboard-body">
                    <div className="dashboard-sidebar">
                        <Sidebar/>
                    </div>
                    <div className="dashboard-content">
                        <MainRouter/>
                        {toggleSideBar && <MobileNav/>}
                    </div>
            </div>
            </DashboardLayoutStyles>

        </AppLayout>
    )
}

const DashboardLayoutStyles = styled.div`

    .dashboard-topbar {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: red;
        z-index: 2;
    }

    .dashboard-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .dashboard-sidebar {
            background-color: #f4f6f8;
            min-height: 100vh;
            width: 250px;
            position: fixed;
            margin-top: 60px;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .dashboard-content {
            background-color: #f4f6f8;
            min-height: 100vh;
            width: calc(100% - 250px);
            margin-left: 250px;
            margin-top: 60px;

            @media (max-width: 768px) {
                width: 100%;
                margin-left: 0;
            }
        }
    }
`