import HamburgerMenu from "../Hamburger/Hambuger";
import styles from "./Navbar.module.css";
import logo from '../../assets/logo/fokus_logo.avif';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles["nav-bar"]}>
            <NavLink to="/" className={`${styles["nav-bar-item"]} ${styles["nav-bar-logo"]}`}>
                <img src={logo} alt="Logo" />
            </NavLink>
            <div className={`${styles["nav-bar-item"]} ${styles["hamburger-menu-nav-icon"]}`}>
                <HamburgerMenu />
            </div>
            <NavLink to="/login" className={styles["nav-bar-item"]}>
                Login
            </NavLink>
        </div>
    );
};

export default Navbar;