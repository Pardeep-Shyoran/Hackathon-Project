import { useGSAP } from "@gsap/react";
import { flavorlists } from "../../Constant";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./FlavorSlider.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axiosconfig";

const FlavorSlider = () => {
    const sliderRef = useRef();

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });

    // useGSAP(() => {
        // const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    //     if (!isTablet) {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".flavor-section",
    //                 start: "2% top",
    //                 end: `+=${scrollAmount + 1500}px`,
    //                 scrub: true,
    //                 pin: true,
    //             },
    //         });

    //         tl.to(".flavor-section", {
    //             x: `-${scrollAmount + 1500}px`,
    //             ease: "power1.inOut",
    //         });
    //     }

    //     const titleTl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".flavor-section",
    //             start: "top top",
    //             end: "bottom 80%",
    //             scrub: true,
    //         },
    //     });

    //     titleTl
    //         .to(".first-text-split", {
    //             xPercent: -30,
    //             ease: "power1.inOut",
    //         })
    //         .to(
    //             ".flavor-text-scroll",
    //             {
    //                 xPercent: -22,
    //                 ease: "power1.inOut",
    //             },
    //             "<"
    //         )
    //         .to(
    //             ".second-text-split",
    //             {
    //                 xPercent: -10,
    //                 ease: "power1.inOut",
    //             },
    //             "<"
    //         );
    // });

    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer.users);
    const [products, setProducts] = useState([]);


    useEffect(() => {

        (async () => {
            try {
                const { data } = await axios.get("/products");
                // console.log(data);
                setProducts(data); // <-- don't append
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <section ref={sliderRef} className={styles["slider-wrapper"]}>

            <Link to="/shop" className={styles.imgWrapper}>
                <img src="https://res.cloudinary.com/dcaggtr9h/image/upload/v1752757867/Frame_3_1_hahfe4.png" alt="" />
            </Link>

        {/* <div className={styles.productsContainer}>
            {products.map((product) => (
                <div className={`${styles.productCard} ${styles.productDetailsLink}`} key={product.id}>
                    <Link to={`/shop/${product.id}`}>
                        <img className={styles.productImage} src={product.image} alt={product.title} />
                    </Link>
                    <div className={styles.productDetails}>

                        <h1 className={styles.productTitle}>{product.title}</h1>
                        <h1 className={styles.productDesc}>{product.description}</h1>
                        <div className={styles.productBottomRow}>
                            <p className={styles.productPrice}>₹ {product.price}</p>
                            <button
                                className={styles.btnAddToCart}
                                onClick={() => AddToCartHandler(product)}
                                >
                                Add to Cart
                            </button>
                        </div>
                        <Link to={`/shop/${product.id}`} className={` ${styles.moreDetails}`}>
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div> */}
            </section>
    );
};

export default FlavorSlider;
