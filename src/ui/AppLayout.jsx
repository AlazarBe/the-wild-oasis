import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"
import styled from "styled-components"

const Main=styled.main`
  background-color: var(--color-gray-0);
  padding: 4rem 4.8rem 6rem;
`
const StyledAppLayout=styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: 6.4rem 1fr;
  height: 100vh;
`
function AppLayout() {
  return (
    <StyledAppLayout>
        <Header/>
        <SideBar/>
        <Main>
          <Outlet/>
        </Main>
    </StyledAppLayout>
  )
}

export default AppLayout