import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Login from "../pages/Login/Login"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import Register from "../pages/Register/Register"



const MainRoutes = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default MainRoutes