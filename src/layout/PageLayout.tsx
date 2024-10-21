import AppLayout from "@/app/app";

interface pageLayoutProps {
    title: string,
    description?: string,
    children: React.ReactNode
}

export default function PageLayout ({ title, description, children }:pageLayoutProps){
    return (
        <AppLayout title={title} description={description}>
            {children}
        </AppLayout>
    )
}