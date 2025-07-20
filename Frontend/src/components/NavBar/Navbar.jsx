import HamburgerMenu from "../Hamburger/Hambuger";
import styles from "./Navbar.module.css";
import logo from '../../assets/logo/fokus_logo.avif';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.users);
    // console.log(user);


    return (
        <div className={styles["nav-bar"]}>
            <NavLink to="/" className={`${styles["nav-bar-item"]} ${styles["nav-bar-logo"]}`}>
                <img className={styles["nav-bar-logo-img"]} src={logo} alt="Logo" />
            </NavLink>
            <div className={`${styles["nav-bar-item"]} ${styles["hamburger-menu-nav-icon"]}`}>
                <HamburgerMenu />
            </div>

            {user ? <>
                <NavLink to="/user/Profile" className={styles["nav-bar-item"]}>
                    {user ? <img src={user.image} alt="Profile" className={styles["profile-image"]} /> : <span className={styles["profile-icon"]}>P</span>}
                </NavLink>
            </> : <>
                <NavLink to="/login" className={styles["nav-bar-item"]}>
                    Login
                </NavLink>
            </>}
        </div>
    );
};

export default Navbar;