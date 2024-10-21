import styled from "styled-components";
import { useState } from "react";
import { Input , Button, Spinner } from "@/sky_design_system";

export default function Login (){
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLoading, setLoading ] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setLoading(true)
    }
    return (
        <Styles>
            <h2>Sign In</h2><br/>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e)=> setUserName(e.target.value)}
                    width="calc(100% - 20px)"
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                     width="calc(100% - 20px)"
                    required
                />
                <Button
                    type="submit"
                    label={isLoading ? <Spinner color="#fff"/> : "Sign in"}
                />
            </form>
        </Styles>
    )
}

const Styles = styled.div`
    background-color: #fff;
    padding: 20px 30px;
`