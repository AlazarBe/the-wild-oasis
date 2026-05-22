import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import styled from "styled-components"
import { useEffect } from "react"

const FullPage=styled.div`
    
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`
function ProtectedRoute({children}) {
    const navigate=useNavigate()
    // 1 Load the authenticated user
     const {isLoading, isAuthenticated }=useUser()
    
    //2 if there is no authenticated user , redirect to the /login
    useEffect(function(){
   if(!isAuthenticated && !isLoading) navigate('/login')
    },[isAuthenticated , isLoading,navigate])

    // 3 while loading  show the spinner

    if(isLoading) return (
        <FullPage>
            <Spinner />
        </FullPage>
    )

    
    // if there is a user , render the app

    return children
}

export default ProtectedRoute
