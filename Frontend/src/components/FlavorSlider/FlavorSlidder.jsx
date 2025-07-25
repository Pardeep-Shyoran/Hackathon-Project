import { useGSAP } from "@gsap/react";
import { flavorlists } from "../../Constant";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./FlavorSlider.module.css";

const FlavorSlider = () => {
    const sliderRef = useRef();

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });

    useGSAP(() => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "2% top",
                    end: `+=${scrollAmount + 1500}px`,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(".flavor-section", {
                x: `-${scrollAmount + 1500}px`,
                ease: "power1.inOut",
            });
        }

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl
            .to(".first-text-split", {
                xPercent: -30,
                ease: "power1.inOut",
            })
            .to(
                ".flavor-text-scroll",
                {
                    xPercent: -22,
                    ease: "power1.inOut",
                },
                "<"
            )
            .to(
                ".second-text-split",
                {
                    xPercent: -10,
                    ease: "power1.inOut",
                },
                "<"
            );
    });

    return (
        <div ref={sliderRef} className={styles.sliderWrapper}>
            <div className={styles.flavors}>
                {flavorlists.map((flavor) => (
                    <div
                        key={flavor.name}
                        className={`relative z-30 ${styles.flavorCard} ${styles[flavor.rotation] || ""}`}
                    >
                        <img
                            src={`/images/${flavor.color}-bg.svg`}
                            alt=""
                            className={styles.bgImage}
                        />

                        <img
                            src={`/images/${flavor.color}-drink.webp`}
                            alt=""
                            className={styles.drinks}
                        />

                        <img
                            src={`/images/${flavor.color}-elements.webp`}
                            alt=""
                            className={styles.elements}
                        />

                        <h1 className={styles.sliderTitle}>{flavor.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlavorSlider;
