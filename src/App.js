import { Route, Routes } from "react-router-dom"
import "./styles/styles.scss"
import { Home } from "./pages/Home/Home"
import { Register } from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
import { Profile } from "./pages/Profile/Profile"
import { useSelector } from "react-redux"

export const App = () => {
    const {theme} = useSelector((state) => state);
    return <>
        <div className={`theme-wrapper ${theme.theme}`}>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile/*" element={<Profile/>}/>
            </Routes>
        </div>
    </>
}
