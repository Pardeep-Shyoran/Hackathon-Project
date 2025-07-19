// import { Cross as Hamburger } from 'hamburger-react'
// import { useState } from "react"
// import styles from "./Hamburger.module.css"
// import { NavLink } from 'react-router-dom';

// const menuItems = [
//     { to: "/", label: "Home" },
//     { to: "/shop", label: "Shop" },
//     { to: "/about", label: "About Us" },
//     { to: "/contact", label: "Contacts" },
//     { to: "/tasty-talks", label: "Tasty Talks" },
//     { to: "/login", label: "Login" },
// ];

// const Hambuger = () => {
//     const [open, setOpen] = useState(false);
//     const [hoveredIdx, setHoveredIdx] = useState(null);

//     return (
//         <div className={styles["hamburger-menu"]}>
//             <div className={`${styles["hamburger-icon"]} ${open ? styles["hamburger-icon-active"] : ""}`}>
//                 <Hamburger
//                     size={48}
//                     toggled={open}
//                     toggle={setOpen}
//                 />
//             </div>
//             {open && <div className={styles["hamburger-menu-items"]}>
//                 <header className={styles["hamburger-ham-icon"]}></header>
//                 <main className={styles["hamburger-list-items"]}>
//                     <div className={styles["hamburger-menu-item-right"]}>
//                         {menuItems.map((item, idx) => (
//                             <NavLink
//                                 key={item.to}
//                                 to={item.to}
//                                 className={`${styles["hamburger-menu-item"]} ${hoveredIdx !== null && hoveredIdx !== idx ? styles["faded"] : ""}`}
//                                 onMouseEnter={() => setHoveredIdx(idx)}
//                                 onMouseLeave={() => setHoveredIdx(null)}
//                             >
//                                 {item.label}
//                             </NavLink>
//                         ))}
//                     </div>
//                     <div className={styles["hamburger-menu-item-left"]}>
//                         <img src="https://tse1.mm.bing.net/th/id/OIP.Cw0N6wvJaBFXGibSZVK0uQHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
//                     </div>
//                 </main>
//             </div>}
//         </div>
//     )
// }

// export default Hambuger;












import { Cross as Hamburger } from 'hamburger-react'
import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Hamburger.module.css"

const menuItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contacts" },
    { to: "/tasty-talks", label: "Tasty Talks" },
    { to: "/login", label: "Login" },
];

const menuImages = [
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752751255/Copilot_20250717_165027_eyiwq6.png", // Home
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752753514/Copilot_20250717_172814_hli5uv.png", // Shop
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752751751/Copilot_20250717_165848_tuhuak.png", // About Us
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752752754/Copilot_20250717_171402_o0kjtz.png", // Contacts
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752752281/Copilot_20250717_170734_bi2vdz.png", // Tasty Talks
    "https://res.cloudinary.com/dcaggtr9h/image/upload/v1752752848/Copilot_20250717_171710_prm6qs.png", // Login
];

const Hambuger = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [fade, setFade] = useState(false);
    const [displayedIdx, setDisplayedIdx] = useState(0);
    const [iconSize, setIconSize] = useState(48);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuClosing, setMenuClosing] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth <= 768 ? 32 : 48);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (hoveredIdx !== null && hoveredIdx !== displayedIdx) {
            setFade(true);
            const timer = setTimeout(() => {
                setDisplayedIdx(hoveredIdx);
                setFade(false);
            }, 200); // match your CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [hoveredIdx, displayedIdx]);

    useEffect(() => {
        if (open) {
            setHoveredIdx(null);
            setDisplayedIdx(0); // Reset image to default when menu opens
        }
    }, [open]);

    const handleOpen = () => {
        setMenuVisible(true);
        setMenuClosing(false);
        setOpen(true);
    };

    const handleClose = () => {
        setMenuClosing(true);
        setOpen(false);
        setTimeout(() => {
            setMenuVisible(false);
            setMenuClosing(false);
        }, 500); // match animation duration
    };

    const handleMenuItemClick = (to) => {
        handleClose();
        setTimeout(() => {
            navigate(to);
        }, 500); // match animation duration
    };

    return (
        <div className={styles["hamburger-menu"]}>
            <div className={`${styles["hamburger-icon"]} ${open ? styles["hamburger-icon-active"] : ""}`}>
                <Hamburger
                    size={iconSize}
                    toggled={open}
                    toggle={open ? handleClose : handleOpen}
                />
            </div>
            {menuVisible && (
                <div className={
                    `${styles["hamburger-menu-items"]} ` +
                    (open && !menuClosing ? styles.open : "") +
                    (!open && menuClosing ? styles.close : "")
                }>
                    <header className={styles["hamburger-ham-icon"]}></header>
                    <main className={styles["hamburger-list-items"]}>
                        <div className={styles["hamburger-menu-item-right"]}>
                            {menuItems.map((item, idx) => (
                                <div
                                    key={item.to}
                                    className={`${styles["hamburger-menu-item"]} ${hoveredIdx !== null && hoveredIdx !== idx ? styles["faded"] : ""}`}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    onClick={() => handleMenuItemClick(item.to)}
                                >
                                    {item.label}

                                </div>
                    
                            ))}
                                    <div className={styles["hamburger-social-links"]}>
                                <NavLink target='_blank' className={styles["hamburger-social-link"]} to={"https://youtube.com/@letsfokuschannel"}>
                                            YouTube
                                        </NavLink>
                                        <NavLink target='_blank' className={styles["hamburger-social-link"]} to={"https://www.instagram.com"}>
                                            Instagram
                                        </NavLink>
                                        <NavLink target='_blank' className={styles["hamburger-social-link"]} to={"https://www.linkedin.com"}>
                                            Linkedin
                                        </NavLink>
                                    </div>
                        </div>
                        <div className={styles["hamburger-menu-item-left"]}>
                            <img
                                src={menuImages[displayedIdx]}
                                alt=""
                                className={fade ? styles["img-fade"] : ""}
                            />
                        </div>
                    </main>
                </div>
            )}
        </div>
    )
}

export default Hambuger;