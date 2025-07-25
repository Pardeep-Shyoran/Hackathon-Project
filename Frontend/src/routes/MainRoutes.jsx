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
import Contact from "../pages/Contact/Contact"
import TastyTalks from "../pages/TastyTalks/TastyTalks"
import Shop from "../pages/Shop/Shop"
import ProductDetails from "../pages/ProductDetails/ProductDetails"



const MainRoutes = () => {

    const { users } = useSelector((state) => state.userReducer);

    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasty-talks" element={<TastyTalks />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} />

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