import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import styles from "./FlavorTitle.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlavorTitle = () => {
    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstTextSplit = SplitText.create(`.${styles.firstTextSplit} h1`, {
                type: "chars",
            });
            const secondTextSplit = SplitText.create(`.${styles.secondTextSplit} h1`, {
                type: "chars",
            });

            gsap.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 30%",
                },
            });


            gsap.to(`.${styles.flavorTextScroll}`, {
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 10%",
                },
            });

            gsap.from(secondTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 1%",
                },
            });
        });
    });

    return (
        <div className={styles.generalTitle}>
            <div className={styles.firstTextSplit}>
                <h1>We have 3</h1>
            </div>

            <div
                style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }}
                className={styles.flavorTextScroll}
            >
                <div className={styles.flavorTextScrollInner}>
                    <h2 className={styles.flavorTextScrollText}>freaking</h2>
                </div>
            </div>

            <div className={styles.secondTextSplit}>
                <h1>delicious flavors</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;
