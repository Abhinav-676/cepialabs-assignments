import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function Layout({logoText}) {
    return (
        <>
        <Navbar logoText={logoText}/>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Layout