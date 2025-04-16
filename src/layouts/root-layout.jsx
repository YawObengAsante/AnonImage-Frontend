import { Outlet } from "react-router-dom"
import NavBar from "../components/nav-bar"

export default function RootLayout() {
 return <div>
    <NavBar />
    <Outlet />
    </div>
}
