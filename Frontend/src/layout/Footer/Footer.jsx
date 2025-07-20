import styles from "./Footer.module.css";
import logo from '../../assets/logo/fokus_logo2.webp';
import { Link, NavLink } from "react-router-dom";
import melt from '../../assets/images/melting-bg.svg';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.topImage}>
                <img src={melt} alt="" />
            </div>
            <div className={styles.topSection}>
                <div className={styles.nav}>
                    <ul>
                        <li>Technology</li>
                        <li>Products</li>
                    </ul>
                    <ul>
                        <li>Expertise</li>
                        <li>Key features</li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Still have questions?</h3>
                    <div className={styles.emailForm}>
                        <input type="email" placeholder="Enter your email" />
                        <button className={styles.sendBtn}>Send</button>
                        <div className={styles.arrowBtn}>&#8594;</div>
                    </div>
                </div>
            </div>

            <div className={styles.brand}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; 2025 Fokus. All rights reserved.</p>
                <div className={styles.links}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies Policy</a>
                    <span>Website by <NavLink to="" target="_blank">Pardeep Shyoran</NavLink></span>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
