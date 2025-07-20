import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Login from "../pages/Login/Login"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import Register from "../pages/Register/Register"
import { useSelector } from "react-redux"
import Profile from "../pages/Profile/UserProfile"
import UserProfile from "../pages/Profile/UserProfile"
import Personal from "../pages/Profile/Personal"
import UpdateUserProfile from "../pages/Profile/UpdateUserProfile"
import Cart from "../pages/Cart/Cart"



const MainRoutes = () => {

    const { users } = useSelector((state) => state.userReducer);

    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {users ? <>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
            </> : <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </>}


            <Route path="/user/profile" element={<UserProfile />}>
                {users ? <>
                    <Route index element={<Personal />} />
                    <Route path="update-profile" element={<UpdateUserProfile />} />
                </> : <>
                </>}

            
            </Route>

            <Route path="*" element={<PageNotFound />} />

        </Routes>

    )
}

export default MainRoutes