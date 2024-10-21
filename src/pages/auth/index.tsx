import styled from "styled-components";
import PageLayout from "@/layout/PageLayout";
import Login from "@/components/auth/Login";

export default function AuthPage (){
    return (
        <PageLayout title="BES BEAUTY MERCHANT" description="Beauty Elegance and Style">
            <PageWrapper>
                <div className="centered">
                    <Login/>
                </div>
            </PageWrapper>
        </PageLayout>
    )
}

const PageWrapper = styled.div`
    background-color: #f4f6f8;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .centered {
        max-width: 350px;
    }
`