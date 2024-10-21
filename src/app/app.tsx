import Head from "next/head";
import "../app/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoInternetInfo from "@/layout/NoInternetInfo";
import useOnlineStatus from "@/hooks/useOnlineStatus";

interface appLayoutProps {
    title: string,
    description?: string,
    children: React.ReactNode
}

export default function AppLayout ({ title, description, children }:appLayoutProps){
    const { noInternet, isMounted } = useOnlineStatus();
    if (!isMounted) {
        return null;
    }
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/icon.ico" sizes="any" />
            </Head>
            <div>
                {children}
                {noInternet && <NoInternetInfo/>}
                <ToastContainer autoClose={5000} />
            </div>
        </div>
    )
}